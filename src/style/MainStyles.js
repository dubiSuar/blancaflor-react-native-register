import { StyleSheet } from "react-native";

export const loginstyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderColor: 'red',
        borderWidth: 10, // Fix here
    },

    ImageContainer: {
        borderWidth: 1,  // Fix here
        borderColor: 'red',
        width: 100,
        height: 100,
        marginBottom: 15,
        borderRadius: 20,
    },

    TextInput: {
        borderWidth: 1,  // Fix here
        fontSize: 24,
        height: 50,
        width: 160,
        marginBottom: 15,
    }
});
