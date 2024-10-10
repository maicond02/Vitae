import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const SafeButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Estou Seguro</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#008000',
        padding: 10,
        borderRadius: 8,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
});

export default SafeButton;
