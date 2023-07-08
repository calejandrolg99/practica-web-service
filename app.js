var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.get("/v0/facultades", function (req, res) {
  res.send("Home Page");
});

app.post("/v0/facultades", function (req, res) {
  res.send("Home Page");
});

app.put("/v0/facultades", function (req, res) {
  res.send("Home Page");
});

app.delete("/v0/facultades", function (req, res) {
  res.send("Home Page");
});

app.get("/v0/escuelas", function (req, res) {
  res.send("Home Page");
});

app.post("/v0/escuelas", function (req, res) {
  res.send("Home Page");
});

app.put("/v0/escuelas", function (req, res) {
  res.send("Home Page");
});

app.delete("/v0/escuelas", function (req, res) {
  res.send("Home Page");
});

app.get("/v0/secciones", function (req, res) {
  res.send("Home Page");
});

app.post("/v0/secciones", function (req, res) {
  res.send("Home Page");
});

app.put("/v0/secciones", function (req, res) {
  res.send("Home Page");
});

app.delete("/v0/secciones", function (req, res) {
  res.send("Home Page");
});

app.get("/v0/personas", function (req, res) {
  res.send("Home Page");
});

app.post("/v0/personas", function (req, res) {
  res.send("Home Page");
});

app.put("/v0/personas", function (req, res) {
  res.send("Home Page");
});

app.delete("/v0/personas", function (req, res) {
  res.send("Home Page");
});

app.post("/v0/inscripcion-persona-seccion", function (req, res) {
  res.send("Home Page");
});

app.delete("/v0/inscripcion-persona-seccion", function (req, res) {
  res.send("Home Page");
});

app.get("/v0/estudiantes-seccion/:idSeccion", function (req, res) {
  res.send(req.params.idSeccion);
});

app.get("/v0/estudiantes-seccion/:idSeccion", function (req, res) {
  res.send(req.params.idSeccion);
});

app.listen(5000);
