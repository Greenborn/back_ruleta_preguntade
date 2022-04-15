const db = require('../models/index')

module.exports = class API {

  params      = { app:null };
  controllers = {};
  

  constructor( params ){
    this.params = params;
  }

  init(){
    
    this.params.app.listen(this.params.puerto, err => {
      if (err) {
          console.error("Error: ", err);
          return;
      }
      console.log(`Escuchando en el puerto :${this.params.puerto}`);
    });
  }

  addController( controller ){
    let name = controller.getName();
    this.controllers[ name ] = controller;
    this.controllers[ name ].init( this.params.app, db )
  }
}