import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from '../Utils/Constants';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {StatusBar} from 'native-base';
import BottomBarNavigator from '../components/Navigators/BottomBarNavigator';
import DrawerNavigator from '../components/Navigators/DrawerNavigator';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={Constants.Splash} headerMode={'none'}>
      <Stack.Screen name={Constants.Splash} component={Splash} />
      <Stack.Screen name={Constants.Login} component={Login} />
      <Stack.Screen name={Constants.SignUp} component={Register} />
      <Stack.Screen
        name={Constants.BottomBarNavigator}
        component={BottomBarNavigator}
      />
      <Stack.Screen
        name={Constants.DrawerNavigator}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default Routes = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
