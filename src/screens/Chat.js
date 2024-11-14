import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import Footer from '../components/Footer';

export default function Chat({ navigation }) {
    // Estado para armazenar mensagens e o texto do campo de entrada
    const [messages, setMessages] = useState([
        { id: '1', text: 'Olá! Como posso ajudar com sua denúncia?', sender: 'bot' },
        { id: '2', text: 'Gostaria de fazer uma denúncia anônima sobre um incidente.', sender: 'user' },
        { id: '3', text: 'Claro, pode me dar mais detalhes? Sua identidade será mantida em sigilo.', sender: 'bot' },
        { id: '4', text: 'Foi algo que aconteceu no bairro ontem à noite...', sender: 'user' },
    ]);
    const [messageText, setMessageText] = useState('');

    // Função para enviar uma nova mensagem
    const sendMessage = () => {
        if (messageText.trim()) {
            setMessages([
                ...messages,
                { id: Date.now().toString(), text: messageText, sender: 'user' }
            ]);
            setMessageText('');
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
                    <Image source={require('../assets/back.png')} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chat</Text>
            </View>

            {/* Área de mensagens */}
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[
                        styles.messageBubble,
                        item.sender === 'user' ? styles.userBubble : styles.botBubble
                    ]}>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
                contentContainerStyle={styles.messagesContainer}
            />

            {/* Campo de entrada de mensagem */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={messageText}
                    onChangeText={setMessageText}
                    placeholder="Digite uma mensagem..."
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>

            {/* Componente Footer */}
            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    header: {
        marginTop: 30,
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        elevation: 1,
    },
    logo: {
        width: 23,
        height: 23
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 15,
    },
    messagesContainer: {
        padding: 10,
        paddingBottom: 70, // Espaço para o input não sobrepor as mensagens
    },
    messageBubble: {
        maxWidth: '70%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    userBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    botBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#E8E8E8',
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    inputContainer: {
        paddingBottom: 90,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        backgroundColor: '#FFF',
    },
    input: {
        flex: 1,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#DDD',
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#FFF',
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
