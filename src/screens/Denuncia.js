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
    ScrollView, // Adicionado para melhor gerenciamento de conteúdo
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Footer from '../components/Footer';

export default function Denuncia({ navigation }) {
    const [denuncia, setDenuncia] = useState('');
    const [file, setFile] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const handleSendDenuncia = () => {
        if (denuncia.trim().length === 0) {
            Alert.alert("Erro", "Por favor, descreva a denúncia antes de enviar.");
            return;
        }

        if (!file) {
            Alert.alert("Erro", "Por favor, anexe um arquivo antes de enviar.");
            return;
        }

        setIsSending(true);
        // Simulação de envio
        setTimeout(() => {
            Alert.alert("Denúncia Enviada", "Sua denúncia e o arquivo foram enviados anonimamente. Obrigado pela sua colaboração.");
            setDenuncia(''); // Limpa o campo após o envio
            setFile(null); // Limpa o arquivo após o envio
            setIsSending(false);
        }, 1500);
    };

    const pickFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: "image/*", // Restringe para apenas imagens
                copyToCacheDirectory: true,
            });

            if (result.type === "success") {
                console.log("Arquivo selecionado:", result); // Log para debug
                setFile(result);
            }
        } catch (error) {
            console.error("Erro ao selecionar o arquivo:", error);
        }
    };

    // Função auxiliar para verificar se o arquivo é uma imagem
    const isImage = (file) => {
        const imageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
        return imageTypes.includes(file.mimeType);
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

            {/* Conteúdo principal com ScrollView para evitar problemas em telas menores */}
            <ScrollView contentContainerStyle={styles.content}>
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

                {/* Botão para selecionar arquivo */}
                <TouchableOpacity
                    style={styles.fileButton}
                    onPress={pickFile}
                >
                    <Text style={styles.fileButtonText}>
                        {file ? 'Alterar Imagem' : 'Selecionar Imagem'}
                    </Text>
                </TouchableOpacity>

                {/* Exibe a imagem selecionada */}
                {file && isImage(file) && (
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: file.uri }}
                            style={styles.selectedImage}
                            resizeMode="cover"
                        />
                        <Text style={styles.fileDetailText}>{file.name}</Text>
                    </View>
                )}

                {/* Exibe o nome do arquivo selecionado se não for uma imagem */}
                {file && !isImage(file) && (
                    <View style={styles.fileDetails}>
                        <Text style={styles.fileDetailText}>Arquivo Selecionado:</Text>
                        <Text style={styles.fileDetailText}>{file.name}</Text>
                    </View>
                )}

                {/* Botão para enviar denúncia */}
                <TouchableOpacity
                    style={[styles.button, isSending && styles.buttonDisabled]}
                    onPress={handleSendDenuncia}
                    disabled={isSending}
                >
                    <Text style={styles.buttonText}>
                        {isSending ? 'Enviando...' : 'Enviar Denúncia'}
                    </Text>
                </TouchableOpacity>
            </ScrollView>

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
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20, // Para garantir que o conteúdo não fique escondido atrás do footer
    },
    contentText: {
        fontSize: 22,
        color: '#333',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        minHeight: 150,
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
        marginTop: 10,
    },
    buttonDisabled: {
        backgroundColor: '#87CEFA',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    fileButton: {
        width: '100%',
        backgroundColor: '#f4a261',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    fileButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    fileDetails: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    fileDetailText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    selectedImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
});
