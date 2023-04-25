import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../components/texto.js";


export default function Detalhes({ nome, nomeFazenda, descricao, preco, farmImage, botao }) {
    return <>
        <Texto style={style.nome}>{nome}</Texto>
        <View style={style.farm}>
            <Image source={farmImage} style={style.farmImage} />
            <Texto style={style.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={style.descricao}>{descricao}</Texto>

        <Texto style={style.preco}>{preco}</Texto>

        <TouchableOpacity style={style.botao} ><Texto style={style.textoBotao}>{botao}</Texto></TouchableOpacity>
    </>
}

const style = StyleSheet.create({

    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        lineHeight: 26,
        fontWeight: "normal"

    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 16
    },
    farmImage: {
        width: 32,
        height: 32
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign:"center",
        color:"#FFFFFF",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold"
    }
})