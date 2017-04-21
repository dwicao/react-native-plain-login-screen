import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as colors from '../../colors';

class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPressBack}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>Home</Text>
        <Text>Icon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY,
  },
});

TopBar.propTypes = {
  onPressBack: PropTypes.func.isRequired,
};

export default TopBar;