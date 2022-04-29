export default function verificaVencedor(quadrados, jogador) {

    for (let i = 0; i < 3; i++) {
        if (quadrados[i * 3] === jogador
            && quadrados[i * 3 + 1] === jogador
            && quadrados[i * 3 + 2] === jogador)
            return jogador;
    }

    for (let i = 0; i < 3; i++) {
        if (quadrados[i] === jogador
            && quadrados[i * 3] === jogador
            && quadrados[i * 6] === jogador)
            return jogador;
    }

    if (quadrados[0] === jogador
        && quadrados[4] === jogador
        && quadrados[8] === jogador)
        return jogador;

    if (quadrados[2] === jogador
        && quadrados[4] === jogador
        && quadrados[6] === jogador)
        return jogador;

    for (let i = 0; i < 9; i++) {
        if(!quadrados[i])
            return "";
    }
    return "E";
}