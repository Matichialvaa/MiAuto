import {Button, Text, View} from "react-native";
import {StyleSheet} from "react-native";

export function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido!</Text>
            <Button
                title="Log In"
                onPress={() =>
                    navigation.navigate('Login')}
            />
            <Button
                title="Register"
                onPress={() =>

                    navigation.navigate('Register')}
            />
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {

    },
    title: {
        fontSize: 30,
        alignContent: "center" ,
        flex: 1,

    }

});