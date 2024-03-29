import {Text, TextInput, View} from "react-native";
import {StyleSheet} from "react-native";

export function Register() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Screen</Text>
            <TextInput
                style={styles.textInput}
                placeholder={'Enter your email'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Enter your email'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Enter your email'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Enter your email'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Enter your email'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Enter your email'}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignContent: "center",
    },
    title: {
        fontSize: 50,
    },
    textInput: {

    }

});