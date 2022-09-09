const request = require("request");
const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const token = process.env.TOKEN || '???';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get("/", (req, res) => {
  // read query parameterst
  console.log(req);
  const type = req.query["eventType"];

  // craft IEX API URL
  const url = ` http://fantasy.premierleague.com/api/${type}`;
  console.log(url);
  // make request to IEX API and forward response
  request(url).pipe(res);
});

app.listen(port, () => console.log(`App listening on ${port}`));
