const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const swagger = require("./swagger");
swagger(app);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Devuelve un mensaje de pagina de inicio
 *     responses:
 *       200:
 *         description: Pagina de inicio
 *         content:
 *           text/plain:
 *            schema:
 *             type: string
 */
app.get("/", function (req, res) {
  res.send("Home Page");
});

/**
 * @swagger
 * /v0/facultades:
 *  get:
 *    summary: Devuelve el listado de facultades registradas
 *    responses:
 *      200:
 *      description: Lista de facultades
 *      content:
 *        application/json:
 *        schema:
 *          type: object
 *          properties:
 */
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

/**
 * @swagger
 * /v0/personas:
 *   get:
 *     summary: Devuelve el listado de personas registradas
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   dni:
 *                     type: string
 *                     example: "12345678"
 *                   firstName:
 *                     type: string
 *                     example: "Juan"
 *                   lastName:
 *                     type: string
 *                     example: "Perez"
 */
app.get("/v0/personas", function (req, res) {
  res.send("Home Page");
});

/**
 * @swagger
 * /v0/personas:
 *   post:
 *     summary: Crea una nueva persona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dni:
 *                 type: string
 *                 example: "12345678"
 *               firstName:
 *                 type: string
 *                 example: "Juan"
 *               lastName:
 *                 type: string
 *                 example: "Perez"
 *     responses:
 *       200:
 *         description: Persona creada
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *             example: "Persona creada"
 */
app.post("/v0/personas", function (req, res) {
  res.send("Home Page");
});

app.put("/v0/personas", function (req, res) {
  res.send("Home Page");
});

/**
 * @swagger
 * /v0/personas:
 *   delete:
 *     summary: Elimina una persona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dni:
 *                 type: string
 *                 example: "12345678"
 *     responses:
 *       200:
 *         description: Persona eliminada
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *             example: "Persona eliminada"
 */
app.delete("/v0/personas", function (req, res) {
  res.send("Home Page");
});

app.post("/v0/inscripcion-persona-seccion", function (req, res) {
  res.send("Home Page");
});

app.delete("/v0/inscripcion-persona-seccion", function (req, res) {
  res.send("Home Page");
});

/**
 * @swagger
 * /v0/estudiantes-seccion/{idSeccion}:
 *   get:
 *     summary: Devuelve el listado de estudiantes inscritos en una seccion
 *     parameters:
 *       - in: path
 *         name: idSeccion
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la seccion
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   dni:
 *                     type: string
 *                     example: "12345678"
 *                   firstName:
 *                     type: string
 *                     example: "Juan"
 *                   lastName:
 *                     type: string
 *                     example: "Perez"
 */
app.get("/v0/estudiantes-seccion/:idSeccion", function (req, res) {
  res.send(req.params.idSeccion);
});

/**
 * @swagger
 * /v0/profesores-seccion/{idSeccion}:
 *   get:
 *     summary: Devuelve el listado de profesores inscritos en una seccion
 *     parameters:
 *       - in: path
 *         name: idSeccion
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la seccion
 *     responses:
 *       200:
 *         description: Lista de profesores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   dni:
 *                     type: string
 *                     example: "12345678"
 *                   firstName:
 *                     type: string
 *                     example: "Juan"
 *                   lastName:
 *                     type: string
 *                     example: "Perez"
 */
app.get("/v0/profesores-seccion/:idSeccion", function (req, res) {
  res.send(req.params.idSeccion);
});

app.listen(5000);
