import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>V</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#3a8dff', // Azul claro
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
        marginBottom: 20,
    },
    logoText: {
        fontSize: 90,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
});
