// Importa os componentes React necessários
import React from "react";
import { View, Text } from "react-native";
// Define uma função chamada ResultImc que recebe um único argumento
"props"
export default function ResultDados(props){
// Renderiza um elemento <View> contendo dois elementos <Text> com os dados passados através dos "props"
return(
    <View>
        <Text>{props.messageResultDados}</Text>
        <Text>{props.resultDados}</Text>
    </View>
);
}