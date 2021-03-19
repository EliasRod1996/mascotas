//___dirname = para darle dinamicidad esa va a ser la direccion del hosting
//usando express npm i express
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();

    //parse application/form para caturar un form (body)
    app.use(bodyParser.urlencoded({extended: false}))
    //.. json

    app.use(bodyParser.json())

    

    require('dotenv').config()

    const port = process.env.PORT || 3000;

    //CONECION A BASE DE DATOS MONGODB

    const mongoose = require('mongoose');
    
    const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qa8kv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
    //'mongodb://localhost:27017/test'
    //luego se haran variables de entorno para ocultar user y pw p q sino cualquiera se podria conectar
    mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true}
     )
            .then(() => console.log('Base de datos conectada'))
            .catch(e => console.log(e))



    //MOTOR DE PLANTILLAS
    app.set('view engine', 'ejs');
    app.set('views',  __dirname + '/views')//nombre de directorio y el folder
 

    app.use(express.static(__dirname + '/public'));

    //RUTAS WEB 
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


    //para prender localhost = npm run dev
    // npm i dotenv






























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
