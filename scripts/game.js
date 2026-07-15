const titulo_game = document.getElementById('titulo-game');
const img_game = document.getElementById('img-game');
const botao_game = document.getElementById('recarregar');
const desc_game = document.getElementById('descricao');
const link_game = document.getElementById('link-game');
const gen_game = document.getElementById('genero');
const plat_game = document.getElementById('plataforma');
const pub_game = document.getElementById('publicador');
const desenv_game = document.getElementById('desenvolvedor');
const lanc_game = document.getElementById('lancamento');


async function buscar_game() {
    let resposta = await fetch('https://www.freetogame.com/api/games');
    let jogos = await resposta.json();
    let pos_al = Math.floor(Math.random() * jogos.length);
    let jogo_escolhido = jogos[pos_al];
    
    let titulo = jogo_escolhido["title"];
    let thumbnail = jogo_escolhido["thumbnail"];
    let descricao = jogo_escolhido["short_description"];
    let link = jogo_escolhido["game_url"];
    let genero = jogo_escolhido["genre"];
    let plataforma = jogo_escolhido["platform"];
    let publicador = jogo_escolhido["publisher"];
    let desenvolvidor = jogo_escolhido["developer"];
    let lancamento = jogo_escolhido["release_date"];
    
    img_game.src = thumbnail;
    titulo_game.textContent = titulo;
    desc_game.textContent = descricao
    link_game.textContent = link;
    link_game.href = link;
    gen_game.textContent = `Genre: ${genero}`;
    plat_game.textContent =  `Platform: ${plataforma}`;
    pub_game.textContent = `Publisher: ${publicador}`;
    desenv_game.textContent = `Developer: ${desenvolvidor}`;
    lanc_game.textContent = `Release Date: ${lancamento}`;

};

buscar_game();

botao_game.addEventListener('click', buscar_game);