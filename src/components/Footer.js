import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Footer = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.footerButtonText}>🏠</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={() => navigation.navigate('Denuncia')}
            >
                <Text style={styles.footerButtonText}>⚠️</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={() => navigation.navigate('Chat')}
            >
                <Text style={styles.footerButtonText}>💬</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={() => navigation.navigate('UserProfile')}
            >
                <Text style={styles.footerButtonText}>👤</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 70,
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        elevation: 12,
    },
    footerButton: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    footerButtonText: {
        fontSize: 24,
        color: '#333',
    },
});

export default Footer;