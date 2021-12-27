
// REFERENCIAS DEL HTML
// const lblOnline = document.getElementById("lblOnline");
// const lblOffline = document.getElementById("lblOffline");
    // TAMBIEN PODEMOS UTILIZAR querySelector
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

// AQUI TENEMOS QUE CONECTARNOS A LOS SOCKETS
const socket = io();
// listers or observables que escuchan
// ESTE LISTENER AYUDA A SABER SI ESTA CONECTADO AL SERVIDOR
socket.on('connect',()=>{
    // console.log("Conectado");
    
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

// EVENTO DE DESCONEXION CON EL SERVIDOR
socket.on('disconnect',()=>{
    console.log("Disconnect of server");
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
})

// LA MAYORIA DE LOS EVENTOS "ON" SON PARA ESCUCHAR,
// PERO LOS "emit" QUE SON PARA EMITIR UN EVENTO
btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;
    // console.log(mensaje);
    // ES RECOMENDABLE NO USAR CAMMEL_CASE NI CARACTERES ESPECIALES
    // socket.emit('enviar-mensaje', mensaje);
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }
    // socket.emit('enviar-mensaje',payload)

    // HAY UN TERCER ELEMENTO EN EL EMIT, CALLBACK
    socket.emit('enviar-mensaje',payload)
});