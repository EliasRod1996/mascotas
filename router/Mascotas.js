//se va a hacer un CRUD
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('mascotas', {
        arrayMascotas: [
            {id: 'skdssd', nombre: 'rex', descripcion: 'rex descripcion' },
             
            {id: 'skdssdfs', nombre: 'rex2', descripcion: 'rex2 descripcion' },
        ]
    })
})

module.require = router;    