// Importação das dependências necessárias para o componente
import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultDados from "./resultDados/index.js";
import styles from "./style.js";
// Definição do componente "Form" como padrão para exportação
export default function Form(){
    // Criação de estados iniciais utilizando o useState
    const[nome, setNome]=useState(null) // estado para armazenar a altura
    const[fone, setFone]=useState(null) // estado para armazenar o peso
    const[email, setEmail]=useState(null) // estado para armazenar a altura
    const[messageDados, setMessageDados]=useState("Aguardando Preencher...") // estado para armazenar a mensagem de resultado do cálculo
    const[dados, setDados]=useState(null) // estado para armazenar o valor do IMC calculado
    const[textButton, setTextButton]=useState("Concluir") // estado para armazenar o texto do botão
    // Função responsável por realizar o cálculo do IMC
    function dadosCalculator(){
        return setDados((nome +" enviaremos atualizações no seu telefone " + fone + " ou " + email))
    }
    // Função responsável por validar se os valores de peso e altura foram preenchidos antes de realizar o cálculo
    function validationDados(){
    if(nome,fone,email != null){
        dadosCalculator()
        setNome(null)
        setFone(null)
        setEmail(null)
        setMessageDados("Seja bem-vindo")
        setTextButton("Preencha novamente")
        return
    }
    setDados(null)
    setTextButton("Concluir")
    setMessageDados("PREENCHA NOME, NUMERO E EMAIL PARA Concluir!")
    }
    // Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultImc"
    return(
        <View style={styles.formContext}>
        <View style={styles.form}>
        <Text style={styles.formLabel}>Nome</Text>
        <TextInput style={styles.input} onChangeText={setNome} value={nome}placeholder="Ex: name " keyboardType="default"/>
        
        <Text style={styles.formLabel}>Numero</Text>
        <TextInput style={styles.input} onChangeText={setFone} value={fone} placeholder="Ex: (11) 99999-9999" keyboardType="number-pad"/>

        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Ex: nome@Gmail.com" keyboardType="email-address"/>

        <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationDados()}}>
        <Text style={styles.textButtonCalculator}>
        {textButton}</Text>
        </TouchableOpacity>
        </View>
        <ResultDados messageResultDados={messageDados} resultDados={dados}/>
        </View>
    )
}
