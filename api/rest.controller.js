const bodyParser = require('body-parser');

module.exports = class RESTController {
  
  params = { name:'' };
  app    = null;
  db     = null;

  constructor( params ){
    this.params = params;
  }

  getName(){
    return this.params.name;
  }

  init( app, db ){
    this.app = app;
    this.db  = db;

    this.app.use(bodyParser.json())                            /// Estas lineas creo que habria que moverlas para otro lado mas generico
    this.app.use(bodyParser.urlencoded({ extended: false }))

    this.app.get( "/" + this.getName() + 's', (req, res) =>
      this.db[ this.params.modelName ].findAll().then( (result) => res.json(result) )
    );

    this.app.get( "/" + this.getName() + '/:id', (req, res) =>
      this.db[ this.params.modelName ].findOne({ where:{ 'id':req.params.id } }).then( (result) => res.json(result) )
    );

    this.app.post( "/" + this.getName(), (req, res) => {
      this.db[ this.params.modelName ].create( req.body ).then( (result) => res.json(result) )
    });

    this.app.put( "/" + this.getName() + '/:id', async (req, res) => {
      const encontrado = await this.db[ this.params.modelName ].findOne({ where:{ 'id':req.params.id } });
      
      if (encontrado !== null){
        const updated = await encontrado.update( req.body )
        res.status(201).send(updated)
      } else {
        res.status(404).send('Not found')
      }
    });

    this.app.delete( "/" + this.getName() + '/:id', async (req, res) => {
      const encontrado = await this.db[ this.params.modelName ].findOne({ where:{ 'id':req.params.id } });
      
      if (encontrado !== null){
        const deleted = await encontrado.destroy()
        res.status(201).send(deleted)
      } else {
        res.status(404).send('Not found')
      }
    });
  }
}