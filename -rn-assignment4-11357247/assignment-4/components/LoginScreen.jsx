import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jobizz</Text>
      <Text style={styles.welcomeText}>Welcome Back👋🏾</Text>
      <Text style={styles.subText}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.orContinue}>Or continue with</Text>
      <View style={styles.socialIcons}>
        <Image
          source={require('../assets/apple.png')}
          style={{ width: 28, height: 28 }}
        />
        <Image
          source={require('../assets/google.png')}
          style={{ width: 28, height: 28 }}
        />
        <Image
          source={require('../assets/facebook.png')}
          style={{ width: 28, height: 28 }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.haveNotAcc}>
          Haven't an account?{' '}
          <Text style={styles.signUpText}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
