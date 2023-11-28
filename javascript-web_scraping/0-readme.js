#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

const read = fs.createReadStream(filePath, 'utf-8');
