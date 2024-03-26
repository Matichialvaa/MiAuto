import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const handleLoginPress = () => {

    console.log('Login Pressed');
  };

  const handleRegisterPress = () => {
    // Logic to navigate to Register screen
    console.log('Register Pressed');
  };
  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <Text>Bienvenido!</Text>
          <Button
              title="Log In"
              onPress={() => navigation.navigate('Login')}
          />
          <Button
              title="Register"
              onPress={() => navigation.navigate('Register')}
          />
        </View>
    );
  }

  function LoginScreen() {
    return (
        <View style={styles.container}>
          <Text>Login Screen</Text>
        </View>
    );
  }

  function RegisterScreen() {
    return (
        <View style={styles.container}>
          <Text>Register Screen</Text>
        </View>
    );
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

