import {Pressable, Text, TextInput, View} from "react-native";
import {StyleSheet} from "react-native";
import touchableOpacity from "react-native-web/src/exports/TouchableOpacity";
export function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome again! </Text>
            <Text style={styles.title}>Please enter your email and password to get you started.</Text>
            <TextInput
                style={styles.textInput}
                placeholderTextColor={'#fff'}
                placeholder={'Enter your email'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Enter your password'}
                placeholderTextColor={'#fff'}
                secureTextEntry={true}
            />
            {/* Esto se tiene que cambiar despues para que se consiga mandar un mail, etc*/}
            <Text >Forgot your password?</Text>
            <Pressable
                title={"Submit"}
                style={styles.button}
                onPress={ () => {/*Se tiene que hacer la conexion a base para validar ese mail con esa contraseña*/}}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center"
    },
    textInput: {
        borderRadius: 20,
        borderBottomWidth: 2,
        width: "80%",

        borderColor: 'grey' ,
        backgroundColor: "#722471",

        padding: 10,
        marginTop: 15,

    },
    title:{
        fontSize: 30,
        fontWeight: "bold"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",

        padding: 10,
        marginTop: 7 ,

        borderRadius: 20,
        backgroundColor: "#722471",
        width: "10%"
    },
    buttonText: {
        fontSize: 15,
        color: "#fff"
    }

})