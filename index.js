#!/usr/bin/env node
import { exec } from 'child_process';
const execute  = (command) => {
    return exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
        }
      if (stderr) {
        console.log(stderr);
        return;
      }
      console.log(stdout);
    });
};

execute('ls -a');
console.log(process.argv[2]);