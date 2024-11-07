import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        paddingHorizontal: 16,
    },
    header: {
        marginTop: 60,
        paddingBottom: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#DADADA',
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
