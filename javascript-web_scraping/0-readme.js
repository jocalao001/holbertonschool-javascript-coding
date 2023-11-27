#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

const read = fs.createReadStream(filePath, 'utf-8');

// Imprimir algun error generado
read.on('error', (error) => {
  console.error(error);
});

// Imprimir la data si no hay error
read.on('data', (data) => {
  console.log(data);
});
