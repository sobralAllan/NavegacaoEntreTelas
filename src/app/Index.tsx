import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation } from "expo-router";
import PaginaDois from "./PaginaDois"

export default function Index(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Página Index</Text>
            <Button title="Segunda Página" onPress={() => navigation.navigate('PaginaDois')} />
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