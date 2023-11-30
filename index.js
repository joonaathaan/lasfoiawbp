#!/usr/bin/env node
import { exec } from 'child_process';
import { readFile, readFileSync, readdir } from 'fs';
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

const test = JSON.parse(readFileSync('./package.json'));
console.log(test);
console.log(process.argv[2]);