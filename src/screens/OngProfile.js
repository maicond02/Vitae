import React from 'react'
import Paragraph from '../components/Paragraph'
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../core/theme';
import { View, Image, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';

export default function OngProfile({ navigation, route }) {
    const { profilePic } = route.params;
    const { profileDescription } = route.params;
    const { profileName } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >

                    <Icon name="left"
                        size={26}
                        color={theme.colors.primary}
                        style={styles.logo} />
                </TouchableOpacity>


            </View>
            <View>
                <View style={styles.card}>
                    <Image
                        source={{ uri: profilePic }}
                        style={styles.profilePic}
                    />
                    <Text style={styles.headerText}>{profileName}</Text>
                    <Button style={styles.colorButton}
                        title="Realizar doação"
                        onPress={() => {/* handle donation */ }} />
                </View>
                <Paragraph>
                    {profileDescription}
                </Paragraph>
            </View>
        </View>
    )
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
        elevation: 1,
        // Para iOS:
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
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
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75, // Circular image
        marginBottom: 8, // Espaço entre a imagem e o texto
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center', // Certifica-se de que o texto está centralizado
        marginBottom: 8, // Espaço entre o texto e o botão
    },
    send: {
        width: 23,
        height: 23
    },
    logo: {
        width: 23,
        height: 23
    },
    sizeFlatList: {
        flexDirection: 'row',
    },
    colorButton: {
        backgroundColor: theme.colors.primary
    }
});
