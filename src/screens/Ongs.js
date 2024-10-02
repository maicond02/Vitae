import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../core/theme';

class Ongs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };
    }

    render() {

        const { navigation } = this.props;
        return (
            <View style={styles.areaFeed}>
                <View style={styles.headFeed}>
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={styles.roundedImage}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleOng}>
                            {this.state.feed.nome}
                        </Text>
                        <Text style={styles.descriptionOng}>
                            {this.state.feed.descricao}
                        </Text>
                    </View>
                </View>
                <View style={styles.imgOngs}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OngProfile', { profilePic: this.state.feed.imgperfil, profileName: this.state.feed.nome, profileDescription: this.state.feed.profileDescription })}
                    >
                        <Image
                            source={{ uri: this.state.feed.imgPublicacao }}
                            style={styles.imgOngsSize}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.fieldFunctions}>
                    <TouchableOpacity onPress={() => navigation.navigate('Message', { profilePic: this.state.feed.imgperfil, profileName: this.state.feed.nome, description: this.state.feed.descricao })}
                    >
                        <Icon name="comments-o" size={35} color={theme.colors.primary} style={styles.fildMessage} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Donate', { profilePic: this.state.feed.imgperfil, profileName: this.state.feed.nome, description: this.state.feed.descricao })}>
                        <Icon2 name="hand-holding-heart" size={35} color={theme.colors.primary} style={styles.fildDonate} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default Ongs;

const styles = StyleSheet.create({
    areaFeed: {
        width: '100%',
        height: 500,
        flex: 1,
        marginTop: 0,
    },
    headFeed: {
        width: '100%',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'flex-start',
        padding: 5,
    },
    roundedImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'white',
    },
    titleOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems: 'flex-start',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5,
        height: 20,
    },
    descriptionOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems: 'flex-start',
        marginLeft: 5,
    },
    textContainer: {
        marginLeft: 10,
    },
    imgOngs: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imgOngsSize: {
        width: 500,
        height: 400
    },
    fieldFunctions: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        //borderWidth:1,
        alignItems: 'flex-start',
        padding: 5,
        //borderColor:'red',
        height: 50
    },
    fildDonate: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    fildMessage: {
        width: 40,
        height: 40,
        marginLeft: 5,
    },

})
