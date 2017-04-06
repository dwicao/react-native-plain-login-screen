import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import MyTextInput from './MyTextInput';
import MyButton from './MyButton';
import { diff } from '../utils';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <View style={{ height: 50 }}/>
                <MyTextInput placeholder="Email" />
                <View style={{ height: 20 }}/>
                <MyTextInput placeholder="Password" secureTextEntry/>
                <View style={{ height: 50 }}/>
                <MyButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: diff,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;