import { StyleSheet, TextComponent } from "react-native";
const styles = StyleSheet.create({
// Estilo para o contexto do formulário
formContext: {
minWidth: "30%",
height: "85%",
padding:10,
bottom: 0,
backgroundColor: "#ADD8E6",
alignItems: "center",
borderRadius: 100,
marginTop: 30,
marginBottom:30,
marginLeft:30,
marginRight:30,
overflow: "hidden",
},
// Estilo para o formulário em si
form: {
width: "100%",
height: "auto",
marginTop: 30,
padding: 10,
},
// Estilo para as labels do formulário
formLabel: {
color: "#000000",
fontSize: 18,
paddingLeft: 20,
},
// Estilo para os inputs do formulário
input: {
width: "90%",
borderRadius: 5,
backgroundColor: "#F0FFFF",
height: 40,
margin: 12,
paddingLeft: 10,
},
// Estilo para o botão do formulário
buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#00BFFF",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
},
// Estilo para o texto dentro do botão do formulário
textButtonCalculator: {
fontSize: 20,
color: "#000",
fontWeight: "bold",
textAlign: "center",
width: "100%",
},


});
export default styles;