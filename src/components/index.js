import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="loginScreen" component={LoginScreen} initial/>
          <Scene key="homeScreen" component={HomeScreen}/>
        </Scene>
      </Router>
    )
  }
}

export default App;