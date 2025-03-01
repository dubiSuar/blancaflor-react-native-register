import React from 'react';

import {Text, View, TouchableOpacity, Alert} from 'react-native';
import { welcomestyle } from '../style/WelcomeScreenStyle';

//HANDLE FUNCTIONS

//login functionm
const handleLogin = () => {
    Alert.alert('login')
};

// register function
const handleRegister = () => {
    Alert.alert('register')

};

const WelcomeScreen = ({navigation}) => {
    return (
        <View>
            {/* Register button */}
            <TouchableOpacity style={welcomestyle.button} onPress={() => navigation.navigate('RegisterScreen')} >
                <Text style={welcomestyle.buttonText} >Register</Text>
            </TouchableOpacity>
            
            {/* login button */}
            <TouchableOpacity style={welcomestyle.button} onPress={() => navigation.navigate('LoginScreen')} >
                <Text style={welcomestyle.buttonText} >Login</Text>
            </TouchableOpacity>
        </View>  
    );
};

export default WelcomeScreen;