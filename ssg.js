import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs-extra';
import path from 'path';
import App from './src/App.jsx';

const template = fs.readFileSync('./index.html', 'utf-8');
const render = ReactDOMServer.renderToString(App);
const html = template.replace(
  '<!-- React Content Here -->',
  render
);

const outputDir = path.resolve(__dirname, 'dist');
fs.ensureDirSync(outputDir);
fs.writeFileSync(path.join(outputDir, 'index.html'), html);

console.log('Static site generated at /dist/index.html');
