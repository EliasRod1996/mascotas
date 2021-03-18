//estamos pasando las rutas web a un sitio aparte
//se esta modularizando
const express = require("express");
const router = express.Router();//con eso se accede a las propuedades del router


router.get('/', (req, res) =>{// '/'= pagina raiz
        //console.log(__dirname)
        res.render('index', {titulo: 'mi titulo dinamico '})
    })
 
router.get('/servicios', (req, res) =>{
        res.render('servicios', {tituloServicio: 'respuesta desde servicios'})
    })


    module.exports = router;






