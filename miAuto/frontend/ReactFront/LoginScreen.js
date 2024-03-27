import {Text, View} from "react-native";
import {StyleSheet} from "react-native";
export function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignContent: "center",
    }
})