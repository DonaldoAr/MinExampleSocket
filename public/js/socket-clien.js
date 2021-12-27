console.log("Hola mundo");

// REFERENCIAS DEL HTML
// const lblOnline = document.getElementById("lblOnline");
// const lblOffline = document.getElementById("lblOffline");
    // TAMBIEN PODEMOS UTILIZAR querySelector
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

// AQUI TENEMOS QUE CONECTARNOS A LOS SOCKETS
const socket = io();
// listers or observables que escuchan
// ESTE LISTENER AYUDA A SABER SI ESTA CONECTADO AL SERVIDOR
socket.on('connect',()=>{
    console.log("Conectado");
    
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

// EVENTO DE DESCONEXION CON EL SERVIDOR
socket.on('disconnect',()=>{
    console.log("Disconnect of server");
});