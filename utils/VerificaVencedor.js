export default function verificaVencedor(quadros, jogador) {

    for (let i = 0; i < 3; i++) {
        if (quadros[i * 3] === jogador
            && quadros[i * 3 + 1] === jogador
            && quadros[i * 3 + 2] === jogador)
            return jogador;
    }

    for (let i = 0; i < 3; i++) {
        if (quadros[i] === jogador
            && quadros[i * 3] === jogador
            && quadros[i * 6] === jogador)
            return jogador;
    }

    if (quadros[0] === jogador
        && quadros[4] === jogador
        && quadros[8] === jogador)
        return jogador;

    if (quadros[2] === jogador
        && quadros[4] === jogador
        && quadros[6] === jogador)
        return jogador;

    for (let i = 0; i < 9; i++) {
        if(!quadros[i])
            return "";
    }
    return "E";
}