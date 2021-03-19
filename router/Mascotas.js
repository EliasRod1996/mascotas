//se va a hacer un CRUD
const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');
const { route } = require('./RutasWeb');

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

router.get('/crear', (req, res)=>{
    res.render('crear')
})
router.post('/', async(req, res) =>{
    const body = req.body
    try {
        //Opcion1
        // const mascotaDB = new Mascota(body)//se construye mascota con las propiedades de Modelo
        // await mascotaDB.save()
        //Opcion2
        await Mascota.create(body)


        res.redirect('/mascotas')//redireccion a un sitio web
    } catch (error) {
        console.log(error)
        
    }
})

router.get('/:id', async(req, res) => {

    const id = req.params.id
    try {

        const mascotaDB = await Mascota.findOne({ _id: id})//consulta a la base de datos
        console.log(mascotaDB)

        res.render('detalle', {
            mascota : mascotaDB,
            error: false
        })
        
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.delete('/:id', async(req, res) =>{
    const id = req.params.id

    try {

        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id})
        
        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        } else ({
            estado: false,
            mensaje: 'fallo eliminado!'
        })


    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async(req, res) =>{

    const id = req.params.id
    const body = req.body
    try {

        const mascotaDB = await Mascota.findByIdAndUpdate('id, body', { useFindAndModify: false })
        console.log(mascotaDB)

        res.json({
            estado: true,
            mensaje: 'Editado'
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'fallamos'
        })
        
    }
})

module.exports = router;    