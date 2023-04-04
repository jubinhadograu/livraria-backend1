/*IMPORT DO PACOTE EXPRESS*/
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

/*HABILITA A APLICAÇÃO A MANIPULAR DADPS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}));

/*IMPORTAÇÃO DAS ROTAS (funciona como um link ref)*/
const categoriaController = require('./controller/categoriaController');
const router = require('./controller/categoriaController');

app.use('/', categoriaController);

/*TESTE DE ROTA HTTP GET
2 PARAMETROS:
    1 - NOME DA ROTA
    2 - CALLBACK QUE EXECUTA A AÇÃO DA ROTA
    */
app.get('/testeGET', (req, res)=>{
    res.send('RESPOSTA DA ROTA DE HTTP GET')
});
app.post('/testePOST', (req, res)=>{
    res.send('RESPOSTA DA ROTA DE HTTP POST')
});
app.put('/testePUT', (req, res)=>{
    res.send('RESPOSTA DA ROTA DE HTTP PUT')
});
app.delete('/testeDELETE', (req, res)=>{
    res.send('RESPOSTA DA ROTA DE HTTP DELETE')
});

/*GERENCIADOR DE ROTAS*/
const router

/*ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/categoria excluir', (req, res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO!');
})

/*CRIAÇÃO DO SERVIDOR HTTP:
PARAMETROS:
1 - PORTA LÓGICA
2 - CALLBACK: UMA CHAMADA DENTRO DE UMA FUNÇÃO
*/
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});