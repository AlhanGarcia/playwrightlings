#!/usr/bin/env node
// @ts-check
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const exercises = require('../runner/exercises-list');
const { server, PORT } = require('../runner/server');

// Try requiring picocolors, fallback to basic ANSI codes if not yet installed
let pc;
try {
  pc = require('picocolors');
} catch (e) {
  pc = {
    bold: (s) => `\x1b[1m${s}\x1b[0m`,
    green: (s) => `\x1b[32m${s}\x1b[0m`,
    red: (s) => `\x1b[31m${s}\x1b[0m`,
    yellow: (s) => `\x1b[33m${s}\x1b[0m`,
    cyan: (s) => `\x1b[36m${s}\x1b[0m`,
    blue: (s) => `\x1b[34m${s}\x1b[0m`,
    dim: (s) => `\x1b[2m${s}\x1b[0m`,
    magenta: (s) => `\x1b[35m${s}\x1b[0m`,
  };
}

const ROOT_DIR = path.resolve(__dirname, '..');
const PROGRESS_FILE = path.join(ROOT_DIR, '.playwrightlings-progress.json');

function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    } catch {
      return { completed: [] };
    }
  }
  return { completed: [] };
}

function saveProgress(data) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function getFirstUnsolvedIndex(progress) {
  const completed = new Set(progress.completed || []);
  const idx = exercises.findIndex((ex) => !completed.has(ex.id));
  return idx === -1 ? exercises.length : idx;
}

function printBanner() {
  console.clear();
  console.log(pc.bold(pc.cyan('========================================================================')));
  console.log(pc.bold(pc.magenta('  🎭  P L A Y W R I G H T L I N G S  🎭')));
  console.log(pc.dim('  Interactive Playwright & Modern JavaScript Learning Experience'));
  console.log(pc.bold(pc.cyan('========================================================================\n')));
}

function runPlaywrightTest(specFile) {
  return new Promise((resolve) => {
    const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const child = spawn(
      npxCmd,
      ['playwright', 'test', specFile, '--reporter=list'],
      {
        cwd: ROOT_DIR,
        stdio: 'inherit',
        env: { ...process.env, PORT: String(PORT) },
      }
    );

    child.on('close', (code) => {
      resolve(code === 0);
    });

    child.on('error', (err) => {
      console.error(pc.red(`\nFailed to launch Playwright: ${err.message}`));
      resolve(false);
    });
  });
}

async function runSpecificExercise(exercise, options = {}) {
  const filePath = path.join(ROOT_DIR, exercise.file);
  if (!fs.existsSync(filePath)) {
    console.log(pc.red(`Exercise file not found: ${exercise.file}`));
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const hasNotDone = content.includes('// I AM NOT DONE');

  console.log(pc.blue(`\n▶ Checking: `) + pc.bold(exercise.title));
  console.log(pc.dim(`  File: `) + pc.cyan(exercise.file));
  console.log(pc.dim(`  Lesson: `) + pc.cyan(exercise.readme));

  if (hasNotDone) {
    console.log(pc.yellow(`\n  ⚠  The file contains ${pc.bold('// I AM NOT DONE')}.`));
    console.log(pc.dim(`     Follow the instructions in the code and remove this line when ready!\n`));
  }

  console.log(pc.dim(`  Executing Playwright test runner...\n`));
  const passed = await runPlaywrightTest(exercise.file);

  if (passed && !hasNotDone) {
    console.log(pc.green(`\n  🎉 SUCCESS! All tests passed for ${exercise.id}!`));
    const progress = loadProgress();
    if (!progress.completed.includes(exercise.id)) {
      progress.completed.push(exercise.id);
      saveProgress(progress);
    }
    return true;
  } else if (passed && hasNotDone) {
    console.log(pc.yellow(`\n  ℹ  Tests passed, but remember to remove ${pc.bold('// I AM NOT DONE')} to advance!`));
    return false;
  } else {
    console.log(pc.red(`\n  ❌ Exercise tests failed. Inspect the output above, fix your code, and save!`));
    console.log(pc.dim(`     Need a hint? Run: `) + pc.yellow(`npm run hint`));
    return false;
  }
}

async function watchMode() {
  printBanner();
  
  // Ensure practice server is running
  server.listen(PORT, '127.0.0.1', () => {});
  
  let progress = loadProgress();
  let currentIndex = getFirstUnsolvedIndex(progress);

  if (currentIndex >= exercises.length) {
    console.log(pc.bold(pc.green('🏆 CONGRATULATIONS! You have completed all exercises in Playwrightlings! 🏆\n')));
    console.log('You now have solid hands-on experience with:');
    console.log('  • Modern JavaScript: variables, promises, async/await, arrow functions, classes');
    console.log('  • Playwright: locators, actions, web assertions, waiting, mock network, POM, E2E flows\n');
    process.exit(0);
  }

  let currentEx = exercises[currentIndex];
  let isChecking = false;

  const checkCurrent = async () => {
    if (isChecking) return;
    isChecking = true;
    printBanner();
    
    const pct = Math.round((currentIndex / exercises.length) * 100);
    console.log(pc.bold(`Progress: [${currentIndex}/${exercises.length}] (${pct}%)\n`));
    
    const ok = await runSpecificExercise(currentEx);
    if (ok) {
      progress = loadProgress();
      currentIndex = getFirstUnsolvedIndex(progress);
      if (currentIndex >= exercises.length) {
        console.log(pc.bold(pc.green('\n🏆 AMAZING WORK! You finished all exercises! 🏆\n')));
        process.exit(0);
      }
      currentEx = exercises[currentIndex];
      console.log(pc.bold(pc.green(`\nAdvancing to next exercise: ${currentEx.title}\n`)));
    }
    console.log(pc.dim('\n👀 Watching for file changes... (Press Ctrl+C to quit)\n'));
    isChecking = false;
  };

  await checkCurrent();

  // Watch exercises directory
  const exercisesDir = path.join(ROOT_DIR, 'exercises');
  let debounceTimer = null;

  fs.watch(exercisesDir, { recursive: true }, (eventType, filename) => {
    if (!filename || (!filename.endsWith('.js') && !filename.endsWith('.md'))) return;
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      checkCurrent();
    }, 400);
  });
}

async function verifyAll() {
  printBanner();
  console.log(pc.bold('Running verification on all exercises in sequence...\n'));
  let passedCount = 0;

  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const ok = await runSpecificExercise(ex);
    if (ok) {
      passedCount++;
    } else {
      console.log(pc.red(`\nStopped at ${ex.id}. Fix this exercise before continuing.`));
      process.exit(1);
    }
  }

  console.log(pc.bold(pc.green(`\nAll ${passedCount}/${exercises.length} exercises passed verification!`)));
  process.exit(0);
}

function showHint(exId) {
  const progress = loadProgress();
  let ex;
  if (exId) {
    ex = exercises.find((e) => e.id === exId || e.file.includes(exId));
  } else {
    const idx = getFirstUnsolvedIndex(progress);
    ex = exercises[idx] || exercises[0];
  }

  if (!ex) {
    console.log(pc.red('Exercise not found.'));
    return;
  }

  console.log(pc.bold(pc.cyan(`\n💡 Hint for ${ex.title}:`)));
  console.log(pc.yellow(`   ${ex.hint}\n`));
  console.log(pc.dim(`📖 Read full explanation in: ${ex.readme}\n`));
}

function listExercises() {
  printBanner();
  const progress = loadProgress();
  const completed = new Set(progress.completed || []);

  console.log(pc.bold('Course Curriculum & Exercises:\n'));
  exercises.forEach((ex, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const isDone = completed.has(ex.id);
    const badge = isDone ? pc.green('✔ DONE') : pc.yellow('○ TODO');
    console.log(`  ${pc.dim(num + '.')} [${badge}] ${pc.bold(ex.title)}`);
    console.log(`       ${pc.dim('File:')} ${ex.file}`);
  });
  console.log('\n');
}

async function main() {
  const command = process.argv[2] || 'watch';
  const param = process.argv[3];

  switch (command) {
    case 'watch':
      await watchMode();
      break;
    case 'verify':
      await verifyAll();
      break;
    case 'hint':
      showHint(param);
      break;
    case 'list':
      listExercises();
      break;
    case 'run':
      if (!param) {
        console.log(pc.red('Please provide an exercise ID or file name: e.g. npm run run 01_hello_page'));
        process.exit(1);
      }
      const ex = exercises.find((e) => e.id === param || e.file.includes(param));
      if (!ex) {
        console.log(pc.red(`Could not find exercise matching "${param}". Run 'npm run list' to see all IDs.`));
        process.exit(1);
      }
      await runSpecificExercise(ex);
      break;
    default:
      console.log(`Unknown command: ${command}`);
      console.log(`Available commands: watch, verify, hint, list, run <id>`);
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { runSpecificExercise };
