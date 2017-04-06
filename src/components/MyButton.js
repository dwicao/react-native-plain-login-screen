import React, { Component } from 'react';
import {
    Text,
    Easing,
    Animated,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { myHeight, myWidth } from '../utils';
import * as colors from '../colors';

class MyButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        };

        this.buttonAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        if (this.state.isLoading) return;

        this.setState({ isLoading: true });

        Animated.timing(
            this.buttonAnimated,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
            }
        ).start();

        setTimeout(() => {
            this.setState({ isLoading: false });
            Animated.timing(
                this.buttonAnimated,
                {
                    toValue: 0,
                    duration: 200,
                    easing: Easing.linear,
                }
            ).start();
        }, 2000);
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [myWidth * 0.9, myHeight * 0.08],
        });

        return (
            <Animated.View style={{width: changeWidth}}>
                <TouchableOpacity
                    onPress={this._onPress}
                    activeOpacity={0.8}
                    style={styles.btn}
                >
                    { this.state.isLoading
                        ? <Text style={styles.txt}>H</Text>
                        : <Text style={styles.txt}>Sign In</Text>
                    }
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: myHeight * 0.08,
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