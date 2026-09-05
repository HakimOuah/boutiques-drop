import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

SCRIPT = Path(__file__).parents[1] / 'scripts/porter-skills-hermes.py'
spec = importlib.util.spec_from_file_location('porter', SCRIPT)
porter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(porter)


class SynchronisationTest(unittest.TestCase):
    def test_all_profiles_check_is_read_only_then_sync_is_idempotent(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for profile in porter.PROFILS:
                (root / profile).mkdir()
            command = [sys.executable, str(SCRIPT), '--tous', '--roles', '--all-profiles',
                       '--profiles-root', directory]
            check = subprocess.run(command + ['--check'], capture_output=True)
            self.assertEqual(check.returncode, 1, check.stdout)
            self.assertFalse(any(root.rglob('SKILL.md')))
            sync = subprocess.run(command, capture_output=True)
            self.assertEqual(sync.returncode, 0, sync.stdout)
            check = subprocess.run(command + ['--check'], capture_output=True)
            self.assertEqual(check.returncode, 0, check.stdout)
            contents = [(root/p/'skills/oh-ventures/recherche-produit/SKILL.md').read_bytes()
                        for p in porter.PROFILS]
            self.assertEqual(len(set(contents)), 1)
            self.assertNotIn(b'/private/tmp/instructions', contents[0])

    def test_locally_modified_generated_file_is_preserved(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            relative = Path('oh-ventures/example/SKILL.md')
            file = root/relative
            file.parent.mkdir(parents=True)
            file.write_bytes(b'local changes')
            (root/'.oh-ventures-generated.json').write_text(json.dumps({str(relative): porter.empreinte(b'original')}))
            with self.assertRaises(ValueError):
                porter.plan_sync(root, {relative: b'new source'})
            self.assertEqual(file.read_bytes(), b'local changes')

    def test_unknown_files_survive_and_managed_obsolete_file_is_removed(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            skill = root/'oh-ventures/example'; skill.mkdir(parents=True)
            (skill/'custom.txt').write_bytes(b'custom')
            (skill/'old.txt').write_bytes(b'old')
            (root/'.oh-ventures-generated.json').write_text(json.dumps({'oh-ventures/example/old.txt': porter.empreinte(b'old')}))
            writes, removes = porter.plan_sync(root, {Path('oh-ventures/example/SKILL.md'): b'new'})
            self.assertEqual(removes, [skill/'old.txt'])
            self.assertNotIn(skill/'custom.txt', writes)


if __name__ == '__main__':
    unittest.main()
