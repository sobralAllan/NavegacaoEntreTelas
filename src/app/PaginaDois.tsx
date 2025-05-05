import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native"

export default function PaginaDois(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Página Dois</Text>
            <Button title="Index" onPress={() => navigation.navigate('Index')} />
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