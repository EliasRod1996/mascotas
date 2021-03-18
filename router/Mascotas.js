//se va a hacer un CRUD
const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {

    try {
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)  
        
        res.render('mascotas', {

            arrayMascotas: arrayMascotasDB
            //arrayMascotas = nombre de la propiedad
            //el otro valores
        })
        
    } catch (error) {
        console.log(error)
    }



    
})

module.exports = router;    