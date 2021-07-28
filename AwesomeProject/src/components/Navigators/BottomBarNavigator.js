import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Constants from '../../Utils/Constants';
import DrawerNavigator from './DrawerNavigator';
import {TouchableOpacity} from 'react-native';
import Colors from '../../Utils/Colors';
import HomeScreen from '../../screens/HomeScreen';
import SettingScreen from '../../screens/SettingScreen';
import Images from '../../Utils/Images';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function BottomBarNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'relative',
          // bottom: 0,
          // // left: 20,
          // right: 20,
          // top: 0,
          // elevation: 0,
          backgroundColor: Colors.white,
          height: 85,
        },
      }}>
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // top: 20,
              }}>
              <Image
                source={Images.bottombarsettingsunselected}
                resizeMode="center"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.paleSalmon : Colors.black1,
                  borderColor: 'white',
                }}
              />
              <Text
                style={{color: focused ? Colors.paleSalmon : Colors.black1}}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                top: -50,
                borderColor: Colors.paleSalmon,
                backgroundColor: focused ? Colors.white : Colors.paleSalmon,
                borderRadius: 80 / 2,
                height: 80,
                width: 80,
              }}>
              <Icon
                name="home"
                backgroundColor={focused ? Colors.paleSalmon : Colors.black1}
                color={focused ? Colors.paleSalmon : Colors.black1}
                size={30}
              />

              <Text
                style={{color: focused ? Colors.paleSalmon : Colors.black1}}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 80 / 2,
                height: 80,
                width: 80,
              }}>
              <Image
                source={Images.bottombarprofileunselected}
                resizeMode="center"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.paleSalmon : Colors.black1,
                  borderColor: 'white',
                }}
              />

              <Text
                style={{color: focused ? Colors.paleSalmon : Colors.black1}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomBarIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  shadow: {
    shadowColor: Colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
