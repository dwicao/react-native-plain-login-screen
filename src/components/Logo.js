import React from 'react';
import { Image, StyleSheet } from 'react-native';
import imgLogo from '../images/logo.png';
import * as colors from '../colors';

const Logo = (props) => (
    <Image source={imgLogo} style={styles.img}/>
);

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        tintColor: colors.PRIMARY,
    },
});

export default Logo;
