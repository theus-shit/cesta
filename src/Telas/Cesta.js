import React from "react";
import { Text,Image } from "react-native";

import topo from '../../assets/topo.png';

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