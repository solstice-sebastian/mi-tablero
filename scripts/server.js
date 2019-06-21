/* eslint-disable import/newline-after-import */

const express = require('express');
const path = require('path');

const argv = require('minimist')(process.argv.slice(2));
const envPath = argv.environment ? `.env.${argv.environment}` : '.env';
const filePath = path.resolve(__dirname, '..', envPath);
require('dotenv').config({ path: filePath });

const staticDirPath = path.join(__dirname, 'dist');

const app = express();
app.use(express.static(staticDirPath));
const port = process.env.PORT || 5000;
console.log(`listening on ${port}`);
app.listen(port);

app.get('*', (req, res) => {
  res.sendFile(path.join(staticDirPath, 'index.html'));
});
