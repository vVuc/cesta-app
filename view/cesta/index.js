import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderComponent from "./components/topo.js"
import Detalhes from "./components/detalhes.js";
import Item from "./components/item.js";
import { ScrollView, FlatList } from "react-native";
import Texto from "../components/texto.js";

export function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            key={({ nome }) => mome}
            ListHeaderComponent={() => {
                return <><HeaderComponent {...topo} />
                    <View style={style.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={style.titulo}>{itens.titulo}</Texto>
                    </View></>
            }} />

    </>
}

const style = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 28,
        lineHeight: 32,
    },
})