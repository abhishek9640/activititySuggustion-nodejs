const apiCaller = require('../api');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001;


app.get('/social-activities', async (req, res) => {
  const type = "social";
  apiCaller(req, res, type);
});

app.get('/charity-activities', async (req, res) => {
  const type = "charity";
  apiCaller(req, res, type);
});

app.get('/recreational-activities', async (req, res) => {
  const type = "recreational";
  apiCaller(req, res, type);
});

app.get('/music-activities', async (req, res) => {
  const type = "music";
  apiCaller(req, res, type);
});

app.get('/education-activities', async (req, res) => {
  const type = "education";
  apiCaller(req, res, type);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

