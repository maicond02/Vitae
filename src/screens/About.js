import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import Footer from '../components/Footer';

export default function About({ navigation }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
                        <Image source={require('../assets/back.png')} style={styles.logo} />
                    </TouchableOpacity>
                </View>
                <View >
                <Text style={styles.sectioonAboutTitle}>About Vitae</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>O que é a Plataforma Vitae?</Text>
                    <Text style={styles.sectionText}>
                        A plataforma Vitae é uma solução digital para denunciar e apoiar vítimas de violações de direitos humanos. Ela foi criada para oferecer um espaço seguro e acessível para que qualquer pessoa possa relatar abusos e buscar apoio.
                    </Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Como Funciona a Plataforma?</Text>
                    <Text style={styles.sectionText}>
                        O uso da plataforma é simples e direto: ao acessar, o usuário pode realizar uma denúncia com apenas alguns cliques, encontrar recursos de apoio e visualizar informações educativas sobre direitos humanos.
                    </Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Privacidade e Segurança</Text>
                    <Text style={styles.sectionText}>
                        A privacidade dos nossos usuários é nossa prioridade. Utilizamos criptografia e medidas de segurança rigorosas para garantir o anonimato e proteger as informações dos denunciantes.
                    </Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Impacto Social</Text>
                    <Text style={styles.sectionText}>
                        A Vitae busca gerar impacto positivo na sociedade, contribuindo para a construção de comunidades mais seguras e informadas. A plataforma foi projetada para ajudar especialmente em áreas de risco elevado, como a Bahia, com altas taxas de violência.
                    </Text>
                </View>
                    <Text style={styles.contactTitle}>Dúvidas?</Text>
                    <Text style={styles.contactText}>
                        Se você tiver alguma dúvida sobre a plataforma ou precisar de ajuda, entre em contato conosco:
                    </Text>
                    <Text style={styles.contactInfo}>Email: suporte@vitae.com</Text>
                    <Text style={styles.contactInfo}>Telefone: +55 (11) 1234-5678</Text>
                    <Text style={styles.contactInfo}>WhatsApp: +55 (11) 91234-5678</Text>
            </View>
            
            <Footer navigation={navigation} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f5',
    },
    scrollContent: {
        paddingBottom: 50, // Espaço extra no final
    },
    logo: {
        width: 24,
        height: 24,
    },
    content: {
        paddingBottom: 20, // Corrigido para paddingBottom
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
    },
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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectioonAboutTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    sectionContainer: {
        backgroundColor: '#3d91ff', // Fundo azul claro
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    sectionText: {
        fontSize: 16,
        lineHeight: 26,
        color: '#ffffff',
        textAlign: 'justify',
        marginBottom: 10,
    },
    boldText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

    contactContainer: {
        backgroundColor: '#f0f8ff',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    contactTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3d91ff',
        marginBottom: 5,
        textAlign: 'center',
    },
    contactText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 10,
    },
    contactInfo: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },

    
});
