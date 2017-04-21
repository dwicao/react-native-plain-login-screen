import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import TopBar from '../Reuse/TopBar';
import { diff } from '../../utils';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    Actions.pop();
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: diff }}>
        <TopBar
          title="Home"
          onPressBack={this.onPress}
          leftIconName="md-arrow-round-back"
        />
        <Text>Ini adalah Home</Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;