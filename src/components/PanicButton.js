import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Linking } from 'react-native';

const PanicButton = ({ isSafe, onPress }) => {
    const sendWhatsAppMessage = () => {
        const phoneNumber = '+5519993904436';
        const message = isSafe
            ? 'Estou em segurança, não se preocupe!'
            : 'Estou em perigo, preciso de ajuda!';

        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url);
                } else {
                    alert('WhatsApp não está instalado!');
                }
            })
            .catch((err) => console.error('Erro ao abrir WhatsApp:', err));
    };

    return (
        <TouchableOpacity
            onPress={() => {
                onPress();
                sendWhatsAppMessage();
            }}
            style={[styles.button, isSafe ? styles.safe : styles.danger]}
        >
            <Text style={styles.buttonText}>{isSafe ? 'Emergência!' : 'Estou bem!'}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
        borderWidth: 5,
    },
    safe: {
        backgroundColor: '#32CD32', // verde claro para o estado seguro
        borderColor: '#228B22', // verde escuro no contorno
    },
    danger: {
        backgroundColor: '#FF4500', // vermelho alaranjado para o estado de perigo
        borderColor: '#B22222', // vermelho mais escuro no contorno
        animation: 'pulse 1.5s infinite', // animação de pulsação
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    '@keyframes pulse': {
        '0%': {
            transform: [{ scale: 1 }],
            opacity: 1,
        },
        '50%': {
            transform: [{ scale: 1.1 }],
            opacity: 0.7,
        },
        '100%': {
            transform: [{ scale: 1 }],
            opacity: 1,
        },
    },
});

export default PanicButton;
