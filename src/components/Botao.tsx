import { TouchableOpacity, TouchableOpacityProps, ButtonProps, StyleSheet, View } from "react-native"

export function Botao({...rest}:ButtonProps){
    return (
        <View>
            <TouchableOpacity style={styles.formato} {...rest}/>
        </View>
    );
}

const styles = StyleSheet.create({
    formato:{
        width: "20%",
        borderColor: "#121212",
        borderWidth: 2,
        textAlign: 'center',
    },
});

