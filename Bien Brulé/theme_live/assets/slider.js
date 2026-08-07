class SliderElement extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.keen-slider');
    this.navigationElement = this.querySelector('.slider__navigation--inner');
    this.navigationWrapper = this.querySelector('.slider__navigation');
    this.navigationIcon = this.navigationElement?.dataset?.navigationIcon || 'arrow';
    this.autoRotate = parseInt(this.dataset.autoRotate) || false;
    this.slideNumber = this.querySelectorAll('.keen-slider__slide').length;

    this.slidePerViewDesktop = parseInt(this.dataset.slidePerViewDesktop);
    this.slidePerViewTablet = parseInt(this.dataset.slidePerViewTablet);
    this.slidePerViewMobile = parseInt(this.dataset.slidePerViewMobile);

    this.isUpdatedHeight = this.dataset.isUpdatedHeight == 'true';
    this.isUpdatedColor = this.dataset.isUpdatedColor == 'true';

    this.enabledDesktop = this.dataset.enabledDesktop == 'true';
    this.enabledMobile = this.dataset.enabledMobile == 'true';

    this.isAnimationEnabled = !document.documentElement.classList.contains('no-sr');

    // Generic configuration options via data attributes
    this.loop = this.dataset.loop !== 'false'; // Default to true, set to false explicitly
    this.spacingDesktop = parseInt(this.dataset.spacingDesktop) || 16;
    this.spacingTablet = parseInt(this.dataset.spacingTablet) || this.spacingDesktop;
    this.spacingMobile = parseInt(this.dataset.spacingMobile) || this.spacingDesktop;

    this.hasThumbnailNavigation = this.dataset.thumbnailNavigation == 'true';
  }

  connectedCallback() {
    // Remove page-width class from navigation inner element since we're not using absolute positioning
    // if (this.navigationElement && this.navigationElement.classList.contains('page-width')) {
    //   this.navigationElement.classList.remove('page-width');
    // }

    this.initializeSlider();
    this.navigation();
  }

  initializeSlider() {
    if (this.slideNumber < 2) {
      this.navigationWrapper.style.display = 'none';
      return;
    }

    if (window.innerWidth < 750 && this.slidePerViewMobile && this.enabledMobile) {
      this.querySelectorAll(`.keen-slider__slide:nth-child(n+${this.slidePerViewMobile + 1}) .sr-animate`)?.forEach(
        (slide) => {
          slide.classList.remove('sr-animate');
          slide.classList.add('no-animation');
        }
      );
    } else if (window.innerWidth < 1024 && this.slidePerViewTablet && this.enabledDesktop) {
      this.querySelectorAll(`.keen-slider__slide:nth-child(n+${this.slidePerViewTablet + 1}) .sr-animate`)?.forEach(
        (slide) => {
          slide.classList.remove('sr-animate');
          slide.classList.add('no-animation');
        }
      );
    } else if (this.slidePerViewDesktop && this.enabledDesktop) {
      this.querySelectorAll(`.keen-slider__slide:nth-child(n+${this.slidePerViewDesktop + 1}) .sr-animate`)?.forEach(
        (slide) => {
          slide.classList.remove('sr-animate');
          slide.classList.add('no-animation');
        }
      );
    }

    const slider = new KeenSlider(
      this.slider,
      {
        loop: this.loop,
        duration: 1000,
        slides: {
          perView: this.slidePerViewDesktop,
          spacing: this.spacingDesktop,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            disabled: !this.enabledDesktop,
          },
          '(max-width: 1023px)': {
            slides: {
              perView: this.slidePerViewTablet,
              spacing: this.spacingTablet,
            },
            disabled: !this.enabledDesktop,
          },
          '(max-width: 749px)': {
            slides: {
              perView: this.slidePerViewMobile,
              spacing: this.spacingMobile,
            },
            disabled: !this.enabledMobile,
          },
        },
        created: (instance) => {
          this.isUpdatedHeight && this.updateHeight(instance);
          // this.isUpdatedColor && this.updateColors(instance);
        },
        slideChanged: (instance) => {
          this.isUpdatedHeight && this.updateHeight(instance);
          // this.isUpdatedColor && this.updateColors(instance);
        },
        updated: (instance) => this.isUpdatedHeight && this.updateHeight(instance),
      },
      [this.navigation(this.navigationElement), this.autoRotateSlide()]
    );

    // Add event listener for variant change
    window.addEventListener('variantMediaUpdate', (event) => {
      const variant = event.detail.variant;
      const slide = document.querySelector(
        `.keen-slider__slide[data-media-id="${this.dataset.section}-${variant.featured_media.id}"]`
      );

      if (!slide) return;

      const index = parseInt(slide.dataset.slideIndex);
      slider.moveToIdx(index);
    });

    const sr = ScrollReveal({
      duration: 800,
      origin: 'bottom',
      distance: '25px',
      scale: 0.85,
    });

    window.addEventListener('quickAddModalOpened', (event) => {
      setTimeout(() => {
        slider.update();
      }, 100);
    });

    // Add class to slider when it's ready
    setTimeout(() => {
      this.slider.classList.add('slideshow__slider--ready');

      if (window.innerWidth < 750 && this.slidePerViewMobile) {
        const toAnimate = this.enabledMobile
          ? this.querySelectorAll(`.keen-slider__slide:nth-child(-n+${this.slidePerViewMobile}) .sr-animate`)
          : this.querySelectorAll('.keen-slider__slide .sr-animate');
        this.isAnimationEnabled && sr.reveal(toAnimate, { interval: 100 });
      } else if (window.innerWidth < 1024 && this.slidePerViewTablet) {
        const toAnimate = this.enabledDesktop
          ? this.querySelectorAll(`.keen-slider__slide:nth-child(-n+${this.slidePerViewTablet}) .sr-animate`)
          : this.querySelectorAll('.keen-slider__slide .sr-animate');
        this.isAnimationEnabled && sr.reveal(toAnimate, { interval: 100 });
      } else if (this.slidePerViewDesktop) {
        const toAnimate = this.enabledDesktop
          ? this.querySelectorAll(`.keen-slider__slide:nth-child(-n+${this.slidePerViewDesktop}) .sr-animate`)
          : this.querySelectorAll('.keen-slider__slide .sr-animate');
        this.isAnimationEnabled && sr.reveal(toAnimate, { interval: 100 });
      }
    }, 200);

    this.navigationWrapper.className = `slider__navigation hide-desktop--${!this.enabledDesktop} hide-mobile--${!this
      .enabledMobile}`;

    // Store slider instance for external access
    this.sliderInstance = slider;

    // If this is a main product slider with thumbnails, sync with thumbnail slider
    if (this.hasThumbnailNavigation) {
      setTimeout(() => {
        const thumbnailSliderElement = document.querySelector('.thumbnail-slider__wrapper');
        if (thumbnailSliderElement && thumbnailSliderElement.sliderInstance) {
          this.syncWithThumbnailSlider(slider, thumbnailSliderElement.sliderInstance);
        }
      }, 100);
    }
  }

  syncWithThumbnailSlider(mainSlider, thumbnailSlider) {
    // Sync thumbnail slider position when main slider changes
    mainSlider.on('slideChanged', () => {
      const currentSlide = mainSlider.track.details.rel;

      // Update active thumbnail
      const thumbnailItems = document.querySelectorAll('.thumbnail-list__item');
      thumbnailItems.forEach((item, idx) => {
        if (idx === currentSlide) {
          item.classList.add('is-active');
          item.querySelector('button')?.setAttribute('aria-current', 'true');

          // Scroll thumbnail slider to show active thumbnail
          if (thumbnailSlider && !thumbnailSlider.track.details.slides[idx]) return;

          // Calculate if we need to scroll the thumbnail slider
          const perView = thumbnailSlider.options?.slides?.perView || 5;
          const targetSlide = Math.max(0, Math.min(idx, thumbnailSlider.track.details.slides.length - perView));

          if (idx >= perView) {
            thumbnailSlider.moveToIdx(targetSlide);
          } else if (idx === 0) {
            thumbnailSlider.moveToIdx(0);
          }
        } else {
          item.classList.remove('is-active');
          item.querySelector('button')?.removeAttribute('aria-current');
        }
      });
    });
  }

  autoRotateSlide() {
    return (slider) => {
      if (!this.autoRotate) return;
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      const nextTimeout = () => {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, this.autoRotate);
      };
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on('dragStarted', clearNextTimeout);
      slider.on('animationEnded', nextTimeout);
      slider.on('updated', nextTimeout);
    };
  }

  updateColors(instance) {
    const index = instance.track.details.rel;
    const slide = instance.slides[index];
    const colorScheme = slide.className.split(' ').filter((className) => className.startsWith('color-scheme'));
    this.navigationElement.classList.add(`${colorScheme}`);
  }

  updateHeight(instance) {
    if (
      !this.slider.classList.contains('slideshow__slider--auto') &&
      !this.slider.classList.contains('slider--auto') &&
      window.innerWidth > 750
    )
      return;
    const index = instance.track?.details?.rel;
    const slide = instance.slides?.[index];
    if (!slide) return;
    const height = slide.scrollHeight;
    this.slider.style.height = height + 'px';
  }

  navigation(navigationElement) {
    return (slider) => {
      let wrapper, dots, arrowLeft, arrowRight, navigationIcon;
      const self = this; // Capture reference to SliderElement instance

      function markup(remove) {
        wrapperMarkup(remove);
        arrowMarkup(remove);
        dotMarkup(remove);
      }

      function removeElement(element) {
        element.parentNode.removeChild(element);
      }
      function createDiv(className) {
        var div = document.createElement('div');
        var classNames = className.split(' ');
        classNames.forEach((name) => div.classList.add(name));
        return div;
      }

      function arrowMarkup(remove) {
        if (remove) {
          removeElement(arrowLeft);
          removeElement(arrowRight);
          return;
        }
        arrowLeft = createDiv('arrow arrow--left');
        arrowLeft.addEventListener('click', () => slider.prev());
        arrowRight = createDiv('arrow arrow--right');
        arrowRight.addEventListener('click', () => slider.next());

        navigationIcon = navigationElement.dataset.navigationIcon || 'arrow';

        // Add arrow icons
        if (navigationIcon === 'arrow') {
          arrowLeft.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon icon-arrow"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>';
          arrowRight.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon icon-arrow"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>';
        } else if (navigationIcon === 'caret') {
          arrowLeft.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon icon-caret"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>';
          arrowRight.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon icon-caret"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>';
        }

        // Append arrows to navigation element
        navigationElement.appendChild(arrowLeft);
        navigationElement.appendChild(arrowRight);
      }

      function wrapperMarkup(remove) {
        // Skip wrapper manipulation for thumbnail navigation layout
        // This preserves the natural HTML order: main slider → thumbnails
        if (self.hasThumbnailNavigation && !remove) {
          return;
        }

        if (remove) {
          var parent = wrapper.parentNode;
          while (wrapper.firstChild) parent.insertBefore(wrapper.firstChild, wrapper);
          removeElement(wrapper);
          return;
        }
        wrapper = createDiv('navigation-wrapper');
        const sliderElement = slider.container.parentNode;

        // First move the existing navigation wrapper to the end if it exists
        const existingNavWrapper = sliderElement.querySelector('.slider__navigation');
        if (existingNavWrapper) {
          sliderElement.appendChild(existingNavWrapper);
        }

        // Then add the new wrapper before the navigation wrapper
        if (existingNavWrapper) {
          sliderElement.insertBefore(wrapper, existingNavWrapper);
        } else {
          sliderElement.appendChild(wrapper);
        }

        wrapper.appendChild(slider.container);
      }

      function dotMarkup(remove) {
        // Skip dots if using thumbnail navigation
        if (self.hasThumbnailNavigation) {
          return;
        }

        if (remove) {
          removeElement(dots);
          return;
        }
        dots = createDiv('dots');
        slider.track.details.slides.forEach((_e, idx) => {
          var dot = createDiv('dot');
          dot.addEventListener('click', () => slider.moveToIdx(idx));
          dots.appendChild(dot);
        });

        // Insert dots after the first child of navigationElement
        var firstChild = navigationElement.lastChild;
        navigationElement.insertBefore(dots, firstChild);
      }

      function thumbnailMarkup() {
        if (!self.hasThumbnailNavigation) return;

        // The slider-element that contains both the main slider and thumbnail slider
        const mainSliderElement = self;
        const thumbnailSlider = mainSliderElement.querySelector('.thumbnail-slider');

        if (!thumbnailSlider) return;

        const thumbnails = thumbnailSlider.querySelectorAll('.thumbnail');

        // Add click handlers to thumbnails
        thumbnails.forEach((thumbnail, idx) => {
          // Remove any existing click listeners to avoid duplicates
          const newThumbnail = thumbnail.cloneNode(true);
          thumbnail.parentNode.replaceChild(newThumbnail, thumbnail);

          newThumbnail.addEventListener('click', (e) => {
            e.preventDefault();
            slider.moveToIdx(idx);
          });
        });
      }

      function updateClasses() {
        var slide = slider.track.details.rel;

        // Calculate the last valid position accounting for slides per view
        const slidesInView = slider.options?.slides?.perView || 1;
        const totalSlides = slider.track.details.slides.length;
        const lastValidPosition = Math.max(0, totalSlides - slidesInView);

        slide === 0 ? arrowLeft.classList.add('arrow--disabled') : arrowLeft.classList.remove('arrow--disabled');
        slide >= lastValidPosition
          ? arrowRight.classList.add('arrow--disabled')
          : arrowRight.classList.remove('arrow--disabled');

        // Update dots if not using thumbnail navigation
        if (!self.hasThumbnailNavigation && dots) {
          Array.from(dots.children).forEach(function (dot, idx) {
            idx === slide ? dot.classList.add('dot--active') : dot.classList.remove('dot--active');
          });
        }

        // Update thumbnails if using thumbnail navigation
        if (self.hasThumbnailNavigation) {
          const mainSliderElement = self;
          const thumbnailSlider = mainSliderElement.querySelector('.thumbnail-slider');

          if (thumbnailSlider) {
            const thumbnailItems = thumbnailSlider.querySelectorAll('.thumbnail-list__item');
            thumbnailItems.forEach((item, idx) => {
              if (idx === slide) {
                item.classList.add('is-active');
                item.querySelector('button')?.setAttribute('aria-current', 'true');
              } else {
                item.classList.remove('is-active');
                item.querySelector('button')?.removeAttribute('aria-current');
              }
            });
          }
        }
      }

      slider.on('created', () => {
        markup();
        thumbnailMarkup();
        updateClasses();
      });
      slider.on('optionsChanged', () => {
        markup(true);
        markup();
        updateClasses();
      });
      slider.on('slideChanged', () => {
        updateClasses();
      });
      slider.on('destroyed', () => {
        markup(true);
      });
    };
  }
}

customElements.define('slider-element', SliderElement);
