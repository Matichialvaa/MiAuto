import {Pressable, Text, TextInput, View} from "react-native";
import {StyleSheet} from "react-native";
import {useState} from "react";

export function Register( {navigation, route}) {
    //declaro las variables q voy a pedir luego para registrar al usuario.
    const { userType } = route.params;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [password, setPassword] = useState('');
    const [Username, setUsername] = useState('');
    const [Adress, setAdress] = useState('');

    //dependiendo si es driver o service, solicito información distinta.
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register as {userType}</Text>
            {userType === 'driver' && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="userName"
                        value={Username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Surname"
                        value={surname}
                        onChangeText={setSurname}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="address"
                        value={Adress}
                        onChangeText={setAdress}
                    />
                </>
            )}

            {userType === 'service' && (
                <TextInput
                    style={styles.input}
                    placeholder="Service Name"
                    value={serviceName}
                    onChangeText={setServiceName}
                />
            )}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            {/*ACA IRIA FUNCIÓN QUE REGISTRE AL USUARIO EN BASE DE DATOS */}
            <Pressable style={styles.button} onPress={() => navigation.navigate('Register', { userType })}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#507cca',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
    },
});