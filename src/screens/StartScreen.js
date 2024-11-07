import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { StyleSheet, View } from 'react-native';

export default function StartScreen({ navigation }) {
    return (
        <Background>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <Header style={styles.header}>Vitae</Header>
            <Paragraph style={styles.paragraph}>
                Plataforma de denúncia e apoio aos direitos humanos.
            </Paragraph>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    Login
                </Button>
                <Button
                    mode="outlined"
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    Cadastre-se
                </Button>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 32,
        marginBottom: 10,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    loginButton: {
        marginBottom: 15,
        paddingVertical: 10,
    },
    registerButton: {
        paddingVertical: 10,
        borderColor: '#4CAF50',
    },
});

