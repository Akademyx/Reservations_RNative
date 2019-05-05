import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LoginScreen extends Component{
    render(){
        return (
            <View style={StyleSheet.container}>
                <Text>LoginScreen</Text>
            </View>
        )
    }
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});