const express = require('express');
const cors = require('cors');
const { Socket } = require('socket.io');
const { SocketAddress } = require('net');
const { socketController } = require('../sockets/controllerSockets');



class Server {
    constructor() {
        this.app   = express();
        this.port  = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = {
            // auth:       '/api/auth',
            // buscar:     '/api/buscar',
            // categorias: '/api/categorias',
            // productos:  '/api/productos',
            // usuarios:   '/api/usuarios',
            // uploads:    '/api/uploads',
        }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // CONFIGURACION DE SocketS
        this.sockets();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // // Lectura y parseo del body
        // this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // // Fileupload - Carga de archivos
        // this.app.use( fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));

    }

    routes() {
        
        // this.app.use( this.paths.auth, require('../routes/auth'));
        // this.app.use( this.paths.buscar, require('../routes/buscar'));
        // this.app.use( this.paths.categorias, require('../routes/categorias'));
        // this.app.use( this.paths.productos, require('../routes/productos'));
        // this.app.use( this.paths.usuarios, require('../routes/usuarios'));
        // this.app.use( this.paths.uploads, require('../routes/uploads'));  
    }

    sockets(){
        this.io.on('connection', socketController );
    }

    listen() {
        // HERE WE CAN CHANCE LIKE A SERVER IN SCHANGE THE NAME APP
        // this.app.listen( this.port, () => {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;