import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { myHeight, myWidth } from '../utils';
import * as colors from '../colors';

class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Text style={styles.txt}>Sign In</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: myHeight * 0.08,
        width: myWidth * 0.9,
        borderRadius: myHeight * 0.04,
        backgroundColor: colors.PRIMARY,
    },
    txt: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: colors.BASIC,
    },
});

export default MyButton;