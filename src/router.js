const express = require('express');
const testeController = require('./controllers/testeController');

const router = express.Router();

router.get('/testes', testeController.getAll);

// router.get('/testes', (req, res) => {
//     res.status(200).send('O router está funcionando!')
// });

module.exports = router;