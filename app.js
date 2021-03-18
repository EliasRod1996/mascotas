//___dirname = para darle dinamicidad esa va a ser la direccion del hosting
//usando express npm i express
    const express = require('express');
    const app = express();

    const  port = process.env.PORT || 3000;

    //motor de plantillas 
    app.set('view engine', 'ejs');
    app.set('views',  __dirname + '/views')//nombre de directorio y el folder
 

    app.use(express.static(__dirname + '/public'));

    //rutas web
    app.use('/', require('./router/RutasWeb'));
    app.use('/mascotas', require('./router/Mascotas'));


    
    //use = middleware
    app.use((req, res, next) =>{
        res.status(404).render('404', {
            titulo: 404, 
            descripcion: 'titulo del sitio web'
        })
    })//responde cuando no hay una ruta generada



    app.listen(port, ()=>{
        console.log('servidor a su servicio en el puerto', port)
    })
































/*const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Estoy respondiendo a tu solicitud v.3');
})

const puerto = 3000;
server.listen(puerto, () =>{
    console.log('escuchando solicitudes')
})


 //ctrl + c para terminar con el servidor y volver a poner node app.js
 // en cmd : nodemon app.js
// npm i express*/
