import React from 'react';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text, View, Image} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import Colors from '../Utils/Colors';
import Constants from '../Utils/Constants';
import Images from '../Utils/Images';

const Splash = props => {
  return (
    <View style={{backgroundColor: Colors.black1, flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.paleSalmon,
          flex: 1,
          borderBottomRightRadius: 300,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={Images.logosplash}
          style={{
            marginTop: -10,
            height: '50%',
            width: '50%',
            resizeMode: 'center',
          }}
        />
        <View style={{marginBottom: 250, marginTop: -70, height: 31}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: Colors.black,
              letterSpacing: 2,
            }}>
            Duis aute irure dolor
          </Text>
        </View>
        <View style={{marginBottom: 50, marginTop: -230, width: '80%'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.black2,
              textAlign: 'center',
              letterSpacing: 5,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: Colors.black2,
              textAlign: 'center',
            }}>
            . . .
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 25,
          end: 25,
        }}
        onPress={() => props.navigation.replace(Constants.Login)}>
        <Image
          source={Images.arrowForward}
          style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
