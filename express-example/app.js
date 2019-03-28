const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// reading from fs is easy
// fs.readFileSync does exactly what it promises: it reads a file synchronously
// most fs functions expose *sync which used to be good, but nowadays
// we can use async-functions to use promise-versions asynchronously:
//
// const { promisify } = require('util');
// async function readTodos() {
//   return await promisify(
//     fs.readFile(path.resolve('./todos.json)));
// }
//
// of course, this is mostly useful when you actually have lots of things to process
// asynchronously :-)
const todos = JSON.parse(fs.readFileSync(path.resolve("./todos.json")));

app.get("/", (req, res) => res.json(todos));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
