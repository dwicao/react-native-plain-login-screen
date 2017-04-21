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
    const { onPressBack, leftIconName, title } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressBack}>
          <Icon name={leftIconName} size={30} color={colors.BASIC} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPressBack}>
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
  leftIconName: PropTypes.string.isRequired,
};

export default TopBar;