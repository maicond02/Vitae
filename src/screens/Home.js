import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PanicButton from '../components/PanicButton';
import Footer from '../components/Footer'; // importe o Footer

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSafe: true 
        };
    }

    handlePanicButtonPress = () => {
        this.setState((prevState) => ({ isSafe: !prevState.isSafe }));
    };

    render() {
        const { navigation } = this.props;
        const { isSafe } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
                        <Image source={require('../assets/back.png')} style={styles.logo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={[styles.headerText, !isSafe && styles.headerTextDanger]}>
                        Botão do Pânico
                    </Text>
                </View>

                <View style={styles.content}>
                    <PanicButton isSafe={isSafe} onPress={this.handlePanicButtonPress} />
                    <Text style={[styles.contentText, !isSafe && styles.contentTextAlert]}>
                        {isSafe 
                            ? 'Pressione se você está em risco' 
                            : 'Não se preocupe!\nEstamos entrando em contato'}
                    </Text>
                </View>

                {/* Componente Footer */}
                <Footer navigation={navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F5',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
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
    backButton: {
        position: 'absolute',
        left: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#4CAF50',
        letterSpacing: 1,
    },
    headerTextDanger: {
        color: '#FF5252',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    contentText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
        marginTop: 20,
        lineHeight: 26,
    },
    contentTextAlert: {
        color: '#FF5252',
        fontWeight: '600',
    },
});

export default Home;
