const { promisify } = require('util');
const express = require("express");
const redis = require("redis");
const app = express();
const port = 3000;

const client = redis.createClient();
client.on("error", function(err) {
  console.log("Error " + err);
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

app.get("/", async (req, res) => {
  const value = await getAsync('value');
  res.json({ value: parseInt(value, 10) || 0 });
});
app.get("/increment", async (req, res) => {
  const value = await getAsync('value');
  await setAsync('value', value ? parseInt(value, 10) + 1 : 1);
  res.sendStatus(200);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
