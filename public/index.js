window.addEventListener('load', () => {
    const socket = io();
    console.log('Conectado ao servidor de WS');

<<<<<<< HEAD
    socket.on('status',msg =>document.getElementById('status').innerHTML = msg)

    const msgInput = document.getElementById('msg')
    msgInput.addEventListener('keydown', () => {
      if(socket.login) {
        socket.emit('status', `${socket.login} Está digitando....`);
      
      }
    });

    msgInput.addEventListener('keyup', () => socket.emit('status', ' '));
=======
    socket.on('status', msg => document.getElementById('status').innerHTML = msg)

    const msgInput = document.getElementById('msg')
    msgInput.addEventListener('keydown', () => {
      if(socket.login)
         socket.emit('status', `${socket.login} digitando`)
    });

    msgInput.addEventListener('keyup', () => socket.emit('status', ''));

>>>>>>> ca884f3316bec38eebc8fa99ba29c9a058eb63db

    //aguardando msgs encaminhadas pelo servidor
    socket.on('chat msg', msg => {
        console.log(`Msg recebida de ${socket.id}: ${msg}`);
        const mensagens = document.getElementById('mensagens');
        mensagens.innerHTML += `<li>${msg}</li>`;   
    });

<<<<<<< HEAD





=======
>>>>>>> ca884f3316bec38eebc8fa99ba29c9a058eb63db
    const form1 = document.getElementById('form1');
    form1.addEventListener('submit', evt => {
        const msg = document.getElementById('msg').value
        if(!socket.login)
            socket.login = msg;

        socket.emit('chat msg', msg);
        console.log('Enviando mensagem pro servidor');

        //impede o envio do form
        evt.preventDefault(); 
    })
})
