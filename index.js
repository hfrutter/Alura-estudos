import chalk from 'chalk';
import fs from "fs" ;

function trataErro(erro) {
    throw new Error(erro)
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto.md');
