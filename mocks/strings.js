import logo from '../assets/logo.png';
import topos from "../assets/topo.png";

import tomate from '../assets/frutas/Tomate.png';
import brocolis from '../assets/frutas/Brócolis.png';
import batata from '../assets/frutas/Batata.png';
import pepino from '../assets/frutas/Pepino.png';
import abobora from '../assets/frutas/Abóbora.png';

const stringApp = {
    topo: {
        titulo: "Detalhes da cesta",
        logo: topos
    },
    detalhes: {
        nome: "Cesta de verduras",
        nomeFazenda: "Jenne jack farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        farmImage: logo,
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default stringApp;