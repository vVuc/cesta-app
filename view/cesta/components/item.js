import React from "react";
import Texto from "../../components/texto";
import { View, Image, StyleSheet } from "react-native";

export default function Item({item: {nome, imagem}}) {
    return<View style={style.item} key={nome}>
        <Image style={style.imagem} source={imagem} />
        <Texto style={style.nome}>{nome}</Texto>
    </View>
}

const style = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidh: 1,
        borderBottomColor: "#ECECEC",
        padding:16,
        alignItems: "center"
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})