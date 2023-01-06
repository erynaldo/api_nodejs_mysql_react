class Tabelas {
    imit(conexao){
        this.conexao = conexao;
    }

    // criarTabela(){
    //     const sql =
    //         CREATE TABLE IF NOT EXISTS atendimentos (
    //         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //         data DATE,
    //         servico VARCHAR(100),
    //         cliente VARCHAR(100),
    //         STATUS ENUM ("ativo", "realizado", "cancelado") DEFAULT "ativo"
    //         );
    // }

    // this.conexao.query(sql, (error) => {
    //         if(error) {
    //             console.log('Deu erro na hora de criar a tabela atendimentos');
    //             console.log(error.message());
    //         }
    //     })
}