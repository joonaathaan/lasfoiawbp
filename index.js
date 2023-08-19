#!/usr/bin/env node
import { exec } from 'child_process';
exec('ls -a');
console.log(process.argv[2]);