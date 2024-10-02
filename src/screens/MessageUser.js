import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class MessageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: this.props.data
        };
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}

export default MessageUser;

const styles = StyleSheet.create({
    currentUserMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'lightblue',
        width: 200,
        height: 200
    },
    otherUserMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'grey',
        width: 200,
        height: 200
    },
})
