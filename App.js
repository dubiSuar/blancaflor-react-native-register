import React, { useState } from "react";
import { 
    Text,
    View, 
    Image,
    TextInput,  
    TouchableOpacity 
} from "react-native";
import { loginstyle } from "./src/style/MainStyles";

const App = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');

    const handlePress = () => {
        console.log('hello');
        setFirstName('Johnny');
        setUsername('jogger');
    };

    return (
        <View style={loginstyle.container}>

            {/* Image */}
            <TouchableOpacity onPress={handlePress}>
                <Image 
                    style={loginstyle.ImageContainer}
                    source={require('./src/assets/put.jpg')}
                />
            </TouchableOpacity>

            {/* Text */}
            <Text> Lolobron </Text>

            <TextInput
                value={firstName}
                style={loginstyle.TextInput}
                onChangeText={(text) => setFirstName(text)} 
            />

            <TextInput
                value={username}
                style={loginstyle.TextInput}
                onChangeText={(text) => setUsername(text)} 
            />

        </View>
    );
};

export default App;
