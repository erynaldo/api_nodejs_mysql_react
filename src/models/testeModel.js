const conexao = require('./conexao');

const getAll = async () => {
    const testes = await conexao.execute('SELECT * FROM tabela_teste');
    return testes;
};

module.exports = {
    getAll
};