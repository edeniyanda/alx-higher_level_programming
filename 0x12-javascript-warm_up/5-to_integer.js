#!/usr/bin/node
const arg = Math.floor(Number(process.argv[2]));
const print = `My number: ${arg}`;
console.log(Number.isInteger(arg) ? print : 'Not a number');
