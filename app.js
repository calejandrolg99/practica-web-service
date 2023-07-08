const express = require("express");
const app = express();
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");
const bodyParser = require("body-parser");
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API Documentation using Swagger",
    },
  },
  apis: ["./app.js"], // Ruta al archivo que contiene las anotaciones Swagger
};
const specs = swaggerJsdoc(options);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.get("/v0/facultades", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData.facultades);
    }
  });
});

app.post("/v0/facultades", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const newFaculty = req.body;
      jsonData.facultades.push(newFaculty);
      fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error writing data");
        } else {
          res.send("Faculty created");
        }
      });
    }
  });
});

app.put("/v0/facultades", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const updatedFaculty = req.body;
      const index = jsonData.facultades.findIndex(
        (faculty) => faculty.id == updatedFaculty.id
      );
      if (index !== -1) {
        jsonData.facultades[index] = updatedFaculty;
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("Faculty updated");
          }
        });
      } else {
        res.status(404).send("Faculty not found");
      }
    }
  });
});

app.delete("/v0/facultades", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const id = req.body.id;
      const index = jsonData.facultades.findIndex(
        (faculty) => faculty.id == id
      );
      if (index !== -1) {
        jsonData.facultades.splice(index, 1);
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("Faculty deleted");
          }
        });
      } else {
        res.status(404).send("Faculty not found");
      }
    }
  });
});

app.get("/v0/escuelas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData.escuelas);
    }
  });
});

app.post("/v0/escuelas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const newSchool = req.body;
      jsonData.escuelas.push(newSchool);
      fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error writing data");
        } else {
          res.send("School created");
        }
      });
    }
  });
});

app.put("/v0/escuelas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const updatedSchool = req.body;
      const index = jsonData.escuelas.findIndex(
        (school) => school.id == updatedSchool.id
      );
      if (index !== -1) {
        jsonData.escuelas[index] = updatedSchool;
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("School updated");
          }
        });
      } else {
        res.status(404).send("School not found");
      }
    }
  });
});

app.delete("/v0/escuelas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const id = req.body.id;
      const index = jsonData.escuelas.findIndex((school) => school.id == id);
      if (index !== -1) {
        jsonData.escuelas.splice(index, 1);
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("School deleted");
          }
        });
      } else {
        res.status(404).send("School not found");
      }
    }
  });
});

app.get("/v0/secciones", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData.secciones);
    }
  });
});

app.post("/v0/secciones", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const newSection = req.body;
      jsonData.secciones.push(newSection);
      fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error writing data");
        } else {
          res.send("Section created");
        }
      });
    }
  });
});

app.put("/v0/secciones", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const updatedSection = req.body;
      const index = jsonData.secciones.findIndex(
        (section) => section.id == updatedSection.id
      );
      if (index !== -1) {
        jsonData.secciones[index] = updatedSection;
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("Section updated");
          }
        });
      } else {
        res.status(404).send("Section not found");
      }
    }
  });
});

app.delete("/v0/secciones", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const id = req.body.id;
      const index = jsonData.secciones.findIndex(
        (section) => section.id === id
      );
      if (index !== -1) {
        jsonData.secciones.splice(index, 1);
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("Section deleted");
          }
        });
      } else {
        res.status(404).send("Section not found");
      }
    }
  });
});

app.get("/v0/personas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData.personas);
    }
  });
});

app.post("/v0/personas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const newPerson = req.body;
      jsonData.personas.push(newPerson);
      fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error writing data");
        } else {
          res.send("Person created");
        }
      });
    }
  });
});

app.put("/v0/personas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const updatedPerson = req.body;
      const index = jsonData.personas.findIndex(
        (person) => person.id == updatedPerson.id
      );
      if (index !== -1) {
        jsonData.personas[index] = updatedPerson;
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("Person updated");
          }
        });
      } else {
        res.status(404).send("Person not found");
      }
    }
  });
});

app.delete("/v0/personas", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const id = req.body.id;
      const index = jsonData.personas.findIndex((person) => person.id === id);
      if (index !== -1) {
        jsonData.personas.splice(index, 1);
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("Person deleted");
          }
        });
      } else {
        res.status(404).send("Person not found");
      }
    }
  });
});

app.post("/v0/inscripcion-persona-seccion", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const { seccionId, personaId, type } = req.body;
      const sectionIndex = jsonData.secciones.findIndex(
        (section) => section.id == seccionId
      );
      const personIndex = jsonData.personas.findIndex(
        (person) => person.id == personaId
      );
      if (sectionIndex !== -1 && personIndex !== -1) {
        const enrollment = {
          seccionId,
          personaId,
          type,
          status: "enabled",
          deleted_date: null,
          created_date: new Date(),
        };
        jsonData.enrollments.push(enrollment);
        fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing data");
          } else {
            res.send("Person enrolled in section");
          }
        });
      } else {
        res.status(404).send("Section or person not found");
      }
    }
  });
});

app.delete("/v0/inscripcion-persona-seccion", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const { seccionId, personaId } = req.body;
      const sectionIndex = jsonData.secciones.findIndex(
        (section) => section.id == seccionId
      );
      if (sectionIndex !== -1) {
        const enrollmentIndex = jsonData.enrollments.findIndex(
          (enrollment) => enrollment.personaId === personaId
        );
        if (enrollmentIndex !== -1) {
          jsonData.enrollments.splice(enrollmentIndex, 1);
          fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
            if (err) {
              console.error(err);
              res.status(500).send("Error writing data");
            } else {
              res.send("Person unenrolled from section");
            }
          });
        } else {
          res.status(404).send("Enrollment not found");
        }
      } else {
        res.status(404).send("Section not found");
      }
    }
  });
});

app.get("/v0/estudiantes-seccion/:idSeccion", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const idSeccion = req.params.idSeccion;
      const section = jsonData.secciones.find(
        (section) => section.id == idSeccion
      );
      if (section) {
        const students = jsonData.enrollments
          .filter((enrollment) => enrollment.type === "student")
          .map((enrollment) =>
            jsonData.personas.find(
              (person) => person.id === enrollment.personaId
            )
          );
        res.json(students);
      } else {
        res.status(404).send("Section not found");
      }
    }
  });
});

app.get("/v0/profesores-seccion/:idSeccion", function (req, res) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const jsonData = JSON.parse(data);
      const idSeccion = req.params.idSeccion;
      const section = jsonData.secciones.find(
        (section) => section.id == idSeccion
      );
      if (section) {
        const teachers = jsonData.enrollments
          .filter((enrollment) => enrollment.type === "teacher")
          .map((enrollment) =>
            jsonData.personas.find(
              (person) => person.id === enrollment.personaId
            )
          );
        res.json(teachers);
      } else {
        res.status(404).send("Section not found");
      }
    }
  });
});

app.listen(5000);
