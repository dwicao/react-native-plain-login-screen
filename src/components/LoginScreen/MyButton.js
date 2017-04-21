import React, { Component } from 'react';
import {
    Text,
    Image,
    Animated,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import imgLoading from '../../images/loading.gif';
import { myHeight, myWidth } from '../../utils';
import * as colors from '../../colors';

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
        this._animation(this.buttonAnimated, 1, 200);

        setTimeout(() => {
            this.setState({ isLoading: false });
            this._animation(this.buttonAnimated, 0, 200);
        }, 2000);

        setTimeout(() => Actions.homeScreen(), 2300);
    }

    _animation(obj, toValue, duration) {
        Animated.timing(
            obj,
            {
                toValue,
                duration,
            }
        ).start();
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
                        ? <Image source={imgLoading} style={styles.imgLoading}/>
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
    imgLoading: {
        width: myHeight * 0.08,
        height: myHeight * 0.08,
    },
});

export default MyButton;