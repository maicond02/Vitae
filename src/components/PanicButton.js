import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const PanicButton = ({ isSafe, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={
                    isSafe
                    ? require('../../assets/botao_verde.png') 
                    : require('../../assets/botao_vermelho.png') 
                }
                style={styles.buttonImage}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonImage: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
});

export default PanicButton;
