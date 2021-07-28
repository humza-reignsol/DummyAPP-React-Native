import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import Colors from '../../Utils/Colors';
import Constants from '../../Utils/Constants';
import HomeScreen from '../../screens/HomeScreen';
import SettingScreen from '../../screens/SettingScreen';
import BottomBarNavigator from './BottomBarNavigator';
import Profile from '../../screens/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Edit Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
