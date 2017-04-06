import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import { myWidth, myHeight } from '../utils';

class MyTextInput extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder={this.props.placeholder}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEntry}
                    style={styles.textInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: myWidth * 0.9,
        height: myHeight * 0.08,
        borderRadius: myHeight * 0.04,
        paddingHorizontal: myWidth * 0.05,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
    },
});

MyTextInput.defaultProps = {
    secureTextEntry: false,
};

MyTextInput.propTypes = {
    secureTextEntry: PropTypes.bool,
};

export default MyTextInput;