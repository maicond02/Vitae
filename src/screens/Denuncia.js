import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Footer from '../components/Footer';

export default function Denuncia({ navigation }) {
    const [denuncia, setDenuncia] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSendDenuncia = () => {
        if (denuncia.trim().length === 0) {
            Alert.alert("Erro", "Por favor, descreva a denúncia antes de enviar.");
            return;
        }

        setIsSending(true);
        setTimeout(() => {
            Alert.alert("Denúncia Enviada", "Sua denúncia foi enviada anonimamente. Obrigado pela sua colaboração.");
            setDenuncia(''); // Limpa o campo após o envio
            setIsSending(false);
        }, 1500); // Simula o tempo de envio
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
                    <Image source={require('../assets/back.png')} style={styles.logo} />
                </TouchableOpacity>
            </View>

            {/* Conteúdo principal */}
            <View style={styles.content}>
                <Text style={styles.contentText}>Envie uma Denúncia Anônima</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Descreva sua denúncia aqui..."
                    placeholderTextColor="#888"
                    value={denuncia}
                    onChangeText={setDenuncia}
                    multiline={true}
                    maxLength={500} // Limite de caracteres
                />
                <Text style={styles.charCount}>{denuncia.length}/500</Text>
                <TouchableOpacity
                    style={[styles.button, isSending && styles.buttonDisabled]}
                    onPress={handleSendDenuncia}
                    disabled={isSending}
                >
                    <Text style={styles.buttonText}>
                        {isSending ? 'Enviando...' : 'Enviar Denúncia'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Componente Footer */}
            <Footer navigation={navigation} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    header: {
        marginTop: 30,
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
        borderTopWidth: 2,
        borderTopColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    logo: {
        width: 23,
        height: 23,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    contentText: {
        fontSize: 22,
        color: '#333',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 150,
        backgroundColor: '#FFF',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        textAlignVertical: 'top',
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    charCount: {
        alignSelf: 'flex-end',
        color: '#888',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#1E90FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 3,
    },
    buttonDisabled: {
        backgroundColor: '#87CEFA', // Azul claro para indicar que está desativado
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
        shadowColor: '#000',
        elevation: 10,
    },
});
