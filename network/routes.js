//invoco los módulos que voy a utilizar:
//1. express para configurar el servidor 
//2. Network para configurar los mensajes que va a enviar la aplicación
const express = require('express');
const calendario = require('../components/calendario/network');
const avancemeses = require('../components/avancemeses/network');
const nominas = require('../components/nomina_rh/network');
const horas = require('../components/horas/network');
const estudios = require('../components/estudios/network');
const autenticar = require('../components/usuarios/network')

//const chat = require('../components/chat/network');
const routes = function (server){
    console.log('Buscando ruta')
    server.use('/calendario',calendario);
    server.use('/avancemeses',avancemeses);
    server.use('/nominas',nominas);
    server.use('/horas',horas);
    server.use('/estudios',estudios);
    server.use('/autenticar',autenticar);
    //server.use('/user',user);
    //server.use('/chat',chat);
}

module.exports = routes;