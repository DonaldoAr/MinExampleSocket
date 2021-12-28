

const socketController = (socket)=>{
    // LOS SOCKETS TIENEN TAMBIEN TIENE UN ID DE IDENTIFICACION
    console.log("Cliente conectado", socket.id);

    socket.on('disconnect', ()=>{
        console.log("Client disconect", socket.id);
    });

    socket.on('enviar-mensaje', ( payload, callback)=>{
        // console.log(payload); // Ok
        // this.io.emit('enviar-mensaje', payload)

        const id = 123456;
        // CUANDO TODO TERMINO YA SEA DE MANERA CORRECTA O FALLIDA SE EJECUTA EL CALLBACK
        callback( {id, fecha: new Date().getTime()});
        // AQUI SOLO SE ENVIA EL MENSAJE EL MISMO CLIENTE
        // socket.emit('enviar-mensaje', payload)
        // AÑADIMOS EL BROADCAST
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}

module.exports = {
    socketController
}