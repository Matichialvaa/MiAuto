import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function StyledButton({ navigation, input }) {
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                style={styles.button}
                colors={["#508caa", "#18356c"]}
                onPress={() => navigation.navigate(input)}
            >
                <Text style={styles.text}>{input}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    button: {
        width: "80%",
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 14,
        color: "#fff",
    },
});
