import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { loginstyle } from '../style/MainStyles';

const LoginScreen = ({navigation}) => {

  // variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    Alert.alert('wow login working');
  };
  

  return (
    <ImageBackground
      source={require('../../src/assets/overlay.jpg')} 
      style={loginstyle.background}
      resizeMode="cover">
      <View style={loginstyle.container}>
        {/* Title and Description */}
        <View style={loginstyle.titleContainer}>
          <Text style={loginstyle.registerTitle}>Login to your Account</Text>
          <Text style={loginstyle.description}>
            Please Enter Your Credentials
          </Text>
        </View>

        {/* login Card */}
        <View style={loginstyle.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Username Input */}
            <View style={loginstyle.inputGroup}>
              <Text style={loginstyle.label}>Username</Text>
              <TextInput
                placeholder=""
                value={username}
                style={loginstyle.textInput}
                onChangeText={text => setUsername(text)}
              />
            </View>

            {/* Password Input */}
            <View style={loginstyle.inputGroup}>
              <Text style={loginstyle.label}>Password</Text>
              <TextInput
                placeholder=""
                value={password}
                style={loginstyle.textInput}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
            </View>

            <TouchableOpacity style={loginstyle.button} onPress={() => login()}>
              <Text style={loginstyle.buttonText}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
