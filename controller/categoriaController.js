const { Router } = require('express')
const express = require('express')

/*GERENCIADOR DE ROTAS*/
const router = express.Router();
/*ROTA DE INSERÇÃO DE CATEGORIA (post)*/
router.post('/categoria/inserir', (req, res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO');
},);

/*ROTA DE SELEÇÃO DE CATEGORIA (get)*/
router.get('/categoria/selecionar', (req, res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO');
},);

/*ROTA DE ALTERAÇÃO DE CATEGORIA (put)*/
router.put('/categoria/alterar', (req, res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO');
},);

/*ROTA DE EXCLUSÃO DE CATEGORIA (delete)*/
router.delete('/categoria/excluir', (req, res)=>{
    res.send('ROTA DE CATEGORIA DE EXCLUSÃO');
},);

module.exports = router;