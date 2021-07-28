import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../Utils/Colors';
import Constants from '../Utils/Constants';
import Images from '../Utils/Images';
import {CheckBox} from 'native-base';

const Register = ({props, navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);

  return (
    <View style={styles.parentView}>
      <View style={[styles.headerChild, {flexDirection: 'row'}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: 50,
            width: 50,
          }}
          onPress={() => {
            navigation.navigate(Constants.Login);
            console.log('=======>back arrow presses ');
          }}>
          <Image
            source={Images.arrowBack}
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </TouchableOpacity>
        <Image
          source={Images.logosplash}
          style={{height: '80%', width: '80%', resizeMode: 'contain'}}
        />
      </View>

      <View style={styles.contentChild}>
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <Text style={{fontSize: 28, color: Colors.white, fontWeight: 'bold'}}>
            Sign Up
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.white,
              opacity: 0.8,
              letterSpacing: 1.3,
            }}>
            Let's Get Started
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <View
            style={{
              borderRadius: 40,
              borderColor: Colors.paleSalmon,
              borderWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginHorizontal: 10,
            }}>
            <TextInput
              placeholderTextColor={Colors.lightGrey}
              autoCapitalize="none"
              blurOnSubmit={true}
              placeholder="Full Name"
              style={{color: '#fff'}}
            />
          </View>
          <View
            style={{
              borderRadius: 40,
              borderColor: Colors.paleSalmon,
              borderWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginHorizontal: 10,
              marginTop: 20,
            }}>
            <TextInput
              placeholderTextColor={Colors.lightGrey}
              autoCapitalize="none"
              blurOnSubmit={true}
              placeholder="Email Address"
              style={{color: '#fff'}}
            />
          </View>
          <View
            style={{
              borderRadius: 40,
              borderColor: Colors.paleSalmon,
              borderWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginHorizontal: 10,
              marginTop: 20,
            }}>
            <TextInput
              secureTextEntry={passwordVisibility}
              placeholderTextColor={Colors.lightGrey}
              autoCapitalize="none"
              blurOnSubmit={true}
              placeholder="Password"
              style={{color: '#fff'}}
            />
            <TouchableOpacity
              style={{
                resizeMode: 'contain',
                end: 40,
                position: 'absolute',
                top: 17,
              }}
              onPress={() => setPasswordVisibility(!passwordVisibility)}>
              <Image
                resizeMode="center"
                source={Images.eyeOpen}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 40,
              borderColor: Colors.paleSalmon,
              borderWidth: 1,
              paddingVertical: 10,
              marginTop: 20,
              paddingHorizontal: 15,
              marginHorizontal: 10,
            }}>
            <TextInput
              secureTextEntry={confirmPasswordVisibility}
              placeholderTextColor={Colors.lightGrey}
              autoCapitalize="none"
              blurOnSubmit={true}
              placeholder="Confirm Password"
              style={{color: '#fff', paddingHorizontal: 10}}
            />
            <TouchableOpacity
              style={{
                resizeMode: 'contain',
                end: 40,
                position: 'absolute',
                top: 17,
              }}
              onPress={() => setConfirmPasswordVisibility(!passwordVisibility)}>
              <Image
                resizeMode="center"
                source={Images.eyeOpen}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              // backgroundColor: 'red',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            <CheckBox checked={true} color={Colors.paleSalmon} />
            <Text
              style={{
                fontSize: 16,
                color: Colors.veryLightPink,
                marginStart: 15,
              }}>
              I Agree to the Terms & Conditions of Find Local Coffee
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: 'red',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            <CheckBox checked={false} color={Colors.paleSalmon} />
            <Text
              style={{
                fontSize: 16,
                color: Colors.veryLightPink,
                marginStart: 15,
              }}>
              I Confirm that I am at least 18+ Years Old
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(Constants.SignUp)}
            style={{
              marginTop: 30,
              alignSelf: 'center',
              alignItems: 'stretch',
              alignContent: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.paleSalmon,
              paddingHorizontal: 20,
              paddingVertical: 15,
              width: '90%',
              borderRadius: 30,
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.paleSalmon,
  },
  headerChild: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentChild: {
    flex: 5,
    backgroundColor: Colors.black3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  horinzontalLine: {
    height: 0.5,
    backgroundColor: Colors.veryLightPink,
  },
});

export default Register;
