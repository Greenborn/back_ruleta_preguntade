const API = require("./api/api");
const RESTController = require("./api/rest.controller");

const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = 3000;

api = new API({ app: app, puerto: 3000 })

api.addController( new RESTController( { name:"categoria", modelName:'Categoria' } ) )
api.addController( new RESTController( { name:"pregunta",  modelName:'Pregunta' } ) )
api.addController( new RESTController( { name:"respuesta", modelName:'Respuesta' } ) )

api.init();
