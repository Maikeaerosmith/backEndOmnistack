const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//GET/POST/PUT/DELETE
routes.get("/boxes/:id", BoxController.show);
routes.get("/boxes", BoxController.list);
routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store);
routes.post('/boxes', BoxController.store);

routes.delete("/boxes", BoxController.remove);

module.exports = routes;