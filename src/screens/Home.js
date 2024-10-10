import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import PanicButton from '../components/PanicButton'; 
import SafeButton from '../components/SafeButton'; 

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSafe: true 
        };
    }

    handlePanicButtonPress = () => {
        this.setState({ isSafe: false }); 
    };

    handleSafeButtonPress = () => {
        this.setState({ isSafe: true }); 
    };

    render() {
        const { navigation } = this.props;
        const { isSafe } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.headerText, !isSafe && styles.headerTextDanger]}>
                        Botão do Pânico
                    </Text>
                </View>

                <View style={styles.content}>
                    <PanicButton isSafe={isSafe} onPress={this.handlePanicButtonPress} />
                    <Text style={styles.contentText}>
                        {isSafe 
                            ? 'Pressione se você está em risco' 
                            : 'Não se preocupe!\nEstamos entrando em contato'}
                    </Text>
                    
                    {!isSafe && (
                        <SafeButton onPress={this.handleSafeButtonPress} />
                    )}
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={() => navigation.navigate('ConfigurarContato')}
                    >
                        <Text style={styles.footerButtonText}>Configurar contato seguro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    header: {
        marginTop: 80,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#008000',
    },
    headerTextDanger: {
        color: '#FF0000',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#000',
        marginBottom: 20, 
    },
    footer: {
        height: 100,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
    },
    footerButton: {
        alignItems: 'center',
        backgroundColor: '#008000',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    footerButtonText: {
        fontSize: 16,
        color: '#FFF',
    },
});

export default Home;
