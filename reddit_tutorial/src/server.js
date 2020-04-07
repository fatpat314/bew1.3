import express from 'express';

const express = require('express');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
const app = express();
app.get('/', (req, res) => {
  return('Hello World!');
});
