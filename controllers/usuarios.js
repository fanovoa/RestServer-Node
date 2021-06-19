const { response } = require('express');

const usuariosGet = (req, res=response) => {

    const {q, nombre ="No name", apikey, page=1, limit=15 } = req.query;

    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res= response) => {

    const {nombre , edad} = req.body;

    res.status(201).json({
        msg:'post API -controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res=response) => {

    const { id } = req.params;

    res.json({
        msg:'put API -controlador',
        id
    });
}

const usuariosPatch =  (req, res= response) => {
    res.json({
        msg:'Patch API -controlador'
    });
}

const usuariosDelete =  (req, res= response) => {
    res.json({
        msg:'delete API -controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}