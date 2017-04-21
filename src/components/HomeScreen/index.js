import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import TopBar from '../Reuse/TopBar';
import ControlPanel from '../Reuse/ControlPanel';
import { diff } from '../../utils';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  onPress() {
    Actions.pop();
  }

  openDrawer() {
    this._drawer.open();
  }

  render() {
    return (
      <Drawer
        ref={ref => this._drawer = ref}
        content={<ControlPanel />}
        side='right'
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        panOpenMask={0.1}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <View style={{ flex: 1, marginTop: diff }}>
          <TopBar
            title="Home"
            onPressBack={this.onPress}
            onPressIcon={this.openDrawer}
            leftIconName="md-arrow-round-back"
          />
          <Text>Ini adalah Home</Text>
          <TouchableOpacity onPress={this.onPress}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingRight: 3},
};

export default Home;