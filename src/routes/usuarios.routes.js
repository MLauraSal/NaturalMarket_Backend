// routes/usuarioRoutes.js
const express = require('express');
const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuariosControllers.js');

const router = express.Router();

router.get('/', getAllUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;
