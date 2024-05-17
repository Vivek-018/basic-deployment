const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.send("<h1>Hello, how are you</h1>");
});

app.get("/linkdIn", (req, res) => {
  res.json({ name: "vivek", profession: "student" });
});

app.get("/file", (req, res) => {
  const filepath = path.join(__dirname, "public", "index.html");
  res.sendFile(filepath);
  console.log(path);
  console.log(filepath);
  console.log(__dirname);
  console.log(__filename);
});

app.get("/exp", (req, res) => {
  res.send("kaisa rha fir experience deployment ka ");
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
