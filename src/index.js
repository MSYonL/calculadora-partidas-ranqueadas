
// Tabela de classificação
const tabelaRank = [
    { limite: 10, rank: "Ferro" },
    { limite: 20, rank: "Bronze" },
    { limite: 50, rank: "Prata" },
    { limite: 80, rank: "Ouro" },
    { limite: 90, rank: "Diamante" },
    { limite: 100, rank: "Lendário" },
    { limite: Infinity, rank: "Imortal" }
];
// Função para calcular o rank com base nas vitórias e derrotas
function calculadoraDeRank(vitorias, derrotas) {
    const resultadoFinal = vitorias - derrotas;

    // Itera sobre a tabela de classificação para encontrar o rank correspondente
    for (let i = 0; i < tabelaRank.length; i++) { 
        if (resultadoFinal <= tabelaRank[i].limite) {
            return tabelaRank[i].rank;
        }
    }
}

// Primeiro Exemplo
let v = 20;
let d = 10;
let rankObtido = calculadoraDeRank(v, d); // Nome da variável mais claro
console.log(`O Herói tem de saldo de ${v - d} está no nível de ${rankObtido}.`);

// Segundo Exemplo 
v = 132;
d = 21;
rankObtido = calculadoraDeRank(v, d);
console.log(`O Herói tem de saldo de ${v - d} está no nível de ${rankObtido}.`);