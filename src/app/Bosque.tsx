import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native"
import  Index  from "./Index";
import { Botao } from "@/components/Botao";

export default function Bosque(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Página Dois</Text>
            <Button title="Index" onPress={() => navigation.navigate('Index')}/>
            <Botao onPress={() => navigation.navigate('Index')}><Text>Teste</Text></Botao>
            <Botao><Text>Nome</Text></Botao>
        </View>
    );
}//fim da Index

const styles = StyleSheet.create({
    container:{
        flex: 1,
        textAlign: "center",
        backgroundColor: "#CECECE",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        
    },
    texto:{
        textAlign: "center",
        verticalAlign: "middle",
    }
});