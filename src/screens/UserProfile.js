import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import Footer from '../components/Footer';

export default function UserProfile({ navigation }) {
    const [isEditing, setIsEditing] = useState({
        email: false,
        phone: false,
        address: false
    });
    const [profileData, setProfileData] = useState({
        email: 'usuario@exemplo.com',
        phone: '+55 19 9999-9999',
        address: 'Rua Exemplo, 123'
    });

    const toggleEdit = (field) => {
        setIsEditing((prevState) => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const handleInputChange = (field, value) => {
        setProfileData((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
                    <Image source={require('../assets/back.png')} style={styles.logo} />
                </TouchableOpacity>
            </View>

            {/* Conteúdo principal */}
            <View style={styles.content}>
                {/* Imagem de perfil */}
                <Image
                    source={require('../../assets/user_profile.png')} // Substitua pelo caminho correto
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>Nome do Usuário</Text>
                <Text style={styles.userBio}>Este é um breve resumo ou status do usuário.</Text>

                <View style={styles.infoWrapper}>
                    <TouchableOpacity onPress={() => toggleEdit('email')} style={styles.infoContainer}>
                        <Text style={styles.infoTitle}>Email:</Text>
                        {isEditing.email ? (
                            <TextInput
                                style={styles.input}
                                value={profileData.email}
                                onChangeText={(value) => handleInputChange('email', value)}
                                onBlur={() => toggleEdit('email')}
                                autoFocus
                            />
                        ) : (
                            <Text style={styles.infoText}>{profileData.email}</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleEdit('phone')} style={styles.infoContainer}>
                        <Text style={styles.infoTitle}>Telefone:</Text>
                        {isEditing.phone ? (
                            <TextInput
                                style={styles.input}
                                value={profileData.phone}
                                onChangeText={(value) => handleInputChange('phone', value)}
                                onBlur={() => toggleEdit('phone')}
                                autoFocus
                            />
                        ) : (
                            <Text style={styles.infoText}>{profileData.phone}</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleEdit('address')} style={styles.infoContainer}>
                        <Text style={styles.infoTitle}>Endereço:</Text>
                        {isEditing.address ? (
                            <TextInput
                                style={styles.input}
                                value={profileData.address}
                                onChangeText={(value) => handleInputChange('address', value)}
                                onBlur={() => toggleEdit('address')}
                                autoFocus
                            />
                        ) : (
                            <Text style={styles.infoText}>{profileData.address}</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Componente Footer */}
            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
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
        width: 24,
        height: 24,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    userName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
    },
    userBio: {
        fontSize: 15,
        color: '#777',
        textAlign: 'center',
        marginHorizontal: 40,
        marginBottom: 25,
    },
    infoWrapper: {
        width: '90%',
        backgroundColor: '#FFF',
        paddingVertical: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    infoTitle: {
        fontWeight: '600',
        color: '#555',
        fontSize: 16,
    },
    infoText: {
        color: '#555',
        fontSize: 16,
    },
    input: {
        color: '#555',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        flex: 1,
        padding: 0,
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
        elevation: 12,
    },
    footerButton: {
        alignItems: 'center',
    },
    footerButtonText: {
        fontSize: 14,
        color: '#000',
    }
});
