import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../colors';

class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPressBack}>
          <Icon name="md-arrow-round-back" size={30} color={colors.BASIC} />
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={this.props.onPressBack}>
          <Icon name="md-menu" size={30} color={colors.BASIC} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '6.5%',
    paddingHorizontal: '3%',
    backgroundColor: colors.PRIMARY,
  },
  title: {
    color: colors.BASIC,
    fontWeight: 'bold',
  },
});

TopBar.propTypes = {
  onPressBack: PropTypes.func.isRequired,
};

export default TopBar;