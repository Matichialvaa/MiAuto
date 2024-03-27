import {Text, View} from "react-native";
import {StyleSheet} from "react-native";

export function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignContent: "center",
    },
    title: {
        fontSize: 50,
    }

});