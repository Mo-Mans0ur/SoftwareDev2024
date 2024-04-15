import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from "multer";
//const upload = multer({ dest: "./uploads" });
import path from "path";
console.log(path.sep);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req);
    console.log(file);

    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const uniqueFileName = `${uniquePrefix}__${file.originalname}`;

    cb(null, uniqueFileName);
  },
});

function fileFilter(req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/svg", "image/png"];

  console.log(file.mimetype);
}

const upload = multer({ storage, limits: { fileSize: 0.1 * 1024 * 1024 } });

app.post("/form", (req, res) => {
  console.log(req.body);
  delete req.body.password;
  res.send(req.body);
});

app.post("/fileform", upload.single("file"), (req, res) => {
  console.log(req.body);
  res.send({ });
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
