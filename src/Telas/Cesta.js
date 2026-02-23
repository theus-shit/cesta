import React from "react";
import { Text,Image, Dimensions, StyleSheet } from "react-native";

import topo from '../../assets/topo.png';

const whidth= Dimensions.get('screen'). width;

export default function Cesta(){
    return<>
    <Image source={topo} />
    <Text>Detalhes da cesta</Text>
    <Text>Cesta de verduras</Text>
    <Text>Jenny Jack Farm</Text>
    <Text>Uma cesta comk produtos selecionados
        cuidadosamente da fazenda direto pra sua cozinha.
    </Text>
      <Text>R$: 40,00</Text>

    </>
}

const estilos = StyleSheet.create({
topo:{
    width:"100%",
    height: 578 / 768 * width
}
})