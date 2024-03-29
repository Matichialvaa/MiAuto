import {Text, View, StyleSheet, Button, Pressable} from "react-native"; //react-native -> framework to build native apps using react, library for building user interfaces
import StyledButton from "../component/StyledButton";

export function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a MiAuto!</Text>
            <Pressable
                onPress={ () => navigation.navigate("Login")}
                style={styles.button}
            >
                <Text style={styles.subtext}> Login </Text>
            </Pressable>
            <Pressable
                onPress={ () => navigation.navigate("Register")}
                style={styles.button}>
                <Text style={styles.subtext}> Register </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        alignContent: "center" ,
        flex: 1,
        marginBottom: 10,

    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 7 ,
        borderRadius: 20,
        backgroundColor: "#722471",
        width: "90%"
    },
    subtext: {
        color: "#fff",
        fontSize: 17,
    }

});