const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const mimeTypes = require("mime-types");
const mysql = require("mysql");
const cors = require("cors");
// Guarda el archivo
const storage = multer.diskStorage({
  destination: "archivos/",
  filename: function (req, file, cb) {
    cb("", file.originalname);
  },
});

// Sube el archivo
const upload = multer({
  storage: storage,
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "BibliotecaMeiquer",
});

// Inicia servidor
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(bodyParser.json());
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

function handleDisconnect() {
  connection.connect(function (err) {
    if (err) {
      console.error("Error de conexión a la base de datos:", err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log("Conectado a la base de datos");
    }
  });

  connection.on("error", function (err) {
    console.error("Error de conexión a la base de datos:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();
  // Endpoints
  app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/subir.html");
  });
  
  app.post("/files", upload.single("file"), (req, res) => {
    const { ID_Contenido, URL } = req.body;
    const tipo = req.file ? mimeTypes.extension(req.file.mimetype) : null;
    const nombre = req.file ? path.parse(req.file.originalname).name : null;
    
    const query = "INSERT INTO contenido (ID_Contenido, nombre, URL, tipo) VALUES (?, ?, ?, ?)";
    connection.query(query, [ID_Contenido, nombre, URL, tipo], (err, result) => {
      if (err) {
        console.error("Error al insertar en la base de datos:", err);
        res.status(500).send("Error al insertar en la base de datos");
        return;
      }
  
      console.log("Datos insertados correctamente");
      res.sendStatus(200);
    });
  });
  
 

  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    // Realizar la consulta para eliminar el registro con el ID especificado
    const query = `DELETE FROM tabla WHERE id = ?`;

    connection.query(query, [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar el registro:", err);
        res.status(500).send("Error al eliminar el registro");
        return;
      }

      console.log("Registro eliminado con éxito");
      res.status(200).send("Registro eliminado con éxito");
    });
  });

  app.post("/nuevacoleccion", (req, res) => {
   
    const nuevaColeccion = req.body;
    console.log(req)
    const query = "INSERT INTO Contenido (ID_Contenido, titulo, img, etiqueta) VALUES (?, ?, ?, ?)";
  const values = [nuevaColeccion.id, nuevaColeccion.titulo, nuevaColeccion.img, nuevaColeccion.etiqueta];
    connection.query(query, values, (err, result) => {
        if (err) {
          console.error("Error inserting collection into the database: ", err);
          res.status(500).json({ message: "Failed to create collection" });
        } else {
          console.log("Collection created successfully");
          res.status(201).json({ message: "Collection created successfully" });
        }
      });
  });
  app.get("/colecciones", (req, res) => {
    const query = "SELECT * FROM Contenido";
    connection.query(query, (err, result) => {
      if (err) {
        console.error("Error al obtener las colecciones:", err);
        res.status(500).send("Error al obtener las colecciones");
        return;
      }
  
      const infoColecciones = result.map((row) => ({
        id: row.ID_Contenido,
        img: row.img,
        titulo: row.titulo,
        etiqueta: row.etiqueta,
      }));
  
      res.status(200).json(infoColecciones);
     
    });
  });
  app.post("/nuevaactividad", (req, res) => {
    const nuevaActividad = req.body;
  
    const query =
    "INSERT INTO Actividades (titulo, img, etiqueta, descripcion, deadline) VALUES (?, ?, ?, ?, ?)";
  const values = [
    nuevaActividad.titulo,
    nuevaActividad.img,
    nuevaActividad.etiqueta,
    nuevaActividad.descripcion,
    nuevaActividad.deadline,
  ];
  
  
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting activity into the database:", err);
        res.status(500).json({ message: "Failed to create activity" });
      } else {
        console.log("Activity created successfully");
        res.status(201).json({ message: "Activity created successfully" });
      }
    });
  });
  app.get("/actividades", (req, res) => {
    const query = "SELECT * FROM Actividades";
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving activities from the database:", err);
        res.status(500).json({ message: "Failed to retrieve activities" });
      } else {
        console.log("Activities retrieved successfully");
        res.status(200).json(results);
      }
    });
  });
  app.post("/nuevocontenido", (req, res) => {
    const nuevaActividad = req.body;
  
    const query =
    "INSERT INTO links (titulo, url, etiqueta) VALUES (?, ?, ?)";
  const values = [
    nuevaActividad.titulo,
    nuevaActividad.url,
    nuevaActividad.etiqueta,
   
  ];
  
  
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting activity into the database:", err);
        res.status(500).json({ message: "Failed to create activity" });
      } else {
        console.log("Activity created successfully");
        res.status(201).json({ message: "Activity created successfully" });
      }
    });
  });

  app.get("/contenido", (req, res) => {
    const query = "SELECT * FROM links";
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving activities from the database:", err);
        res.status(500).json({ message: "Failed to retrieve activities" });
      } else {
        console.log("Activities retrieved successfully");
        res.status(200).json(results);
      }
    });
  });

  app.post("/nuevovideo", (req, res) => {
    const nuevoVideo = req.body;
  
    const query =
      "INSERT INTO video (titulo, descripcion, etiqueta, link) VALUES (?, ?, ?, ?)";
    const values = [
      nuevoVideo.titulo,
      nuevoVideo.descripcion,
      nuevoVideo.etiqueta,
      nuevoVideo.link,
    ];
  
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting video into the database:", err);
        res.status(500).json({ message: "Failed to create video" });
      } else {
        console.log("Video created successfully");
        res.status(201).json({ message: "Video created successfully" });
      }
    });
  });
  app.get("/video", (req, res) => {
    const query = "SELECT * FROM video";
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving activities from the database:", err);
        res.status(500).json({ message: "Failed to retrieve activities" });
      } else {
        console.log("Activities retrieved successfully");
        res.status(200).json(results);
      }
    });
  });
  

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });