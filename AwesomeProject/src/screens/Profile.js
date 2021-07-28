import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home Screen
          </Text>
          <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
