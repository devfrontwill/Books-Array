let livros = [];
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi();



async function getBuscarLivrosDaApi() {
    const resposta = await fetch(endPointDaApi);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);

}

