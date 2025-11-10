const frases = [
    "Acredite em voce mesmo pois voce e o cara",
    "Voce sempre sera superior se for o melhor no que faz!",
    "sempre va alem pois assim como roubar um banco se tornar o melhor e dificil",
    "voce e capaz va alem do inesperado",
    "Acredite no seu potencial porque ninguem vai ligar parsa ele se voce não ligar voce mesmo",
    "assim como sua ex falou acabamos aqui",
    "seja sempre o melhor no que faz",
    "continue sempre acreditando em si",
    "............... GERANDO RESPOSTA ..........."
];

const botao = document.querySelector(`#botao`);
const frase = document.querySelector(`#frase`);

botao.addEventListener(`click`, function(e) {
    e.preventDefault();
    const fraseMotivacao = Math.floor(Math.random() * frases.length);
    frase.textContent = frases[fraseMotivacao];
});