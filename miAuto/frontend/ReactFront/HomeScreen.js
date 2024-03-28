import {Button, Text, View} from "react-native"; //react-native -> framework to build native apps using react, library for building user interfaces
import {StyleSheet} from "react-native"; //used to create set of styles

export function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido!</Text>
            <Button
                title="Log In" //text shown in button
                onPress={() =>
                    navigation.navigate('Login')} //call this method when pressed
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