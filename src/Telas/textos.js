import React, { Children } from "react";
import { TextComponent } from "react-native";
import {StyleSheet} from "react_native";

export default function Texto({Children,style}){
    let estilo = estilos.texto;

    if(style.fontWeight === 'bold'){
    }
    return <Text style= {[style, estilo]}>{Children}</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily:'MontserratRegular',
        fontWeight:'normal',
    },
    textoNegrito:{
        fontFamily:'MontserratBold',
        fontWeight:'normal',
    }
})