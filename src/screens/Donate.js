import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Button
} from 'react-native';
import { Colors } from 'react-native-paper';
import MessageUser from './MessageUser';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../core/theme';
import Home from './Home';
import { TextInputMask } from 'react-native-masked-text';

export default function Donate({ navigation, route }) {
    const { profilePic, description, profileName } = route.params;
    const [valor, setValor] = useState('');
    const [metodoPagamento, setMetodoPagamento] = useState('');

    const handleDonation = () => {
        // Incluir validação do valor e método de pagamento
        if (!valor || isNaN(valor) || valor <= 0) {
            alert('Por favor, insira um valor válido.');
            return;
        }
        if (!metodoPagamento) {
            alert('Por favor, selecione um método de pagamento.');
            return;
        }
        // Implementar a lógica de doação e fornecer feedback, como um alerta de sucesso
        alert('Doação realizada com sucesso. Obrigado!');
        // Navegar para a tela de confirmação ou recibo
        // navigation.navigate('ConfirmationScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.headFeed}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={{ uri: profilePic }} style={styles.roundedImage} />
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleOng}>{profileName}</Text>
                        <Text style={styles.descriptionOng}>{description}</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.title}>
                Realize uma doação:
            </Text>

            <View style={styles.metodoPagamentoContainer}>
                <Text style={styles.metodoPagamentoTitle}>Método de Pagamento:</Text>
                <View style={styles.metodoPagamentoOptions}>
                    <TouchableOpacity
                        style={metodoPagamento === 'Boleto' ? styles.selectedButton : styles.button}
                        onPress={() => setMetodoPagamento('Boleto')}
                    >
                        <Text style={styles.buttonText}>Boleto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={metodoPagamento === 'Pix' ? styles.selectedButton : styles.button}
                        onPress={() => setMetodoPagamento('Pix')}
                    >
                        <Text style={styles.buttonText}>Pix</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.content}>
                <TextInputMask
                    style={styles.textInputMask}
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$',
                        suffixUnit: ''
                    }}
                    onChangeText={text => setValor(parseFloat(text.replace(/[^0-9]/g, '')))}
                    // Adiciona um valor default para facilitar a formatação
                    value={valor || ''}
                />
            </View>
            <View style={styles.card}>
                <Button style={styles.colorButton}
                    title="Realizar doação"
                    onPress={handleDonation} />

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontSize: 25,
        alignItems: 'flex-start',
        marginLeft: 5,
        color: theme.colors.primary,
        marginLeft: 80

    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        alignItems: 'center', // Alinha os filhos ao centro horizontalmente
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    footer: {
        padding: 14,
        backgroundColor: theme.colors.textInput,
        borderTopColor: theme.colors.primary,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        borderRadius: 8,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.textInput,
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 12,
    },
    fildMessage: {
        marginLeft: 12
    },
    profile: {
        height: 80, // Define a altura do retângulo
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundedImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'white',
    },
    textContainer: {
        marginLeft: 10,
    },
    titleOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems: 'flex-start',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5,
        height: 20,
    },
    descriptionOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems: 'flex-start',
        marginLeft: 5,
    },
    headFeed: {
        width: '100%',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'flex-start',
        marginTop: 5,
        padding: 5,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textInputMask: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    metodoPagamentoContainer: {
        padding: 10,
        alignItems: 'center',
    },
    metodoPagamentoTitle: {

        marginBottom: 10,
        fontFamily: 'Roboto',
        fontSize: 25,
        alignItems: 'flex-start',
        marginLeft: 5,
        color: theme.colors.primary,
    },
    metodoPagamentoOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
    },
    selectedButton: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    colorButton: {
        backgroundColor: theme.colors.primary
    }

})
