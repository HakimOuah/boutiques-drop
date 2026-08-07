const maxSnowflakes = 100;
let snowflakes = [];

function createSnowflakes() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  const snowflakeSpan = document.createElement('span');
  snowflakeSpan.textContent = '❄';
  snowflake.appendChild(snowflakeSpan);

  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;

  document.body.appendChild(snowflake);

  snowflakes.push(snowflake);

  if (snowflakes.length > maxSnowflakes) {
    const oldestSnowflake = snowflakes.shift(); // Remove the first snowflake in the array
    oldestSnowflake.remove();
  }

  snowflake.addEventListener('animationend', () => {
    snowflake.remove();
    snowflakes = snowflakes.filter((item) => item !== snowflake); // Remove from the array when the animation ends
  });
}

setInterval(createSnowflakes, 200);
