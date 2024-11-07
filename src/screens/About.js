import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Footer from '../components/Footer'; // importe o Footer

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StartScreen')}
                >
                    <Image
                        source={require('../img/logo.png')}
                        style={styles.logo} />
                </TouchableOpacity>
            </View>

            {/* Conteúdo principal */}
            <View style={styles.content}>
                <Text style={styles.contentText}>Bem-vindo ao footer!</Text>
            </View>

            {/* Componente Footer */}
            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    logo: {
        width: 23,
        height: 23
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 18,
        color: '#000',
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
    footerButton: {
        alignItems: 'center',
    },
    footerButtonText: {
        fontSize: 14,
        color: '#000',
    }
});
