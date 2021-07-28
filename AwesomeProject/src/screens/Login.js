import React, {useState, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import {Text, View, StyleSheet, Image} from 'react-native';
import Colors from '../Utils/Colors';
import Constants from '../Utils/Constants';
import Images from '../Utils/Images';
import axios from 'axios';

const Login = ({props, navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = email => {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const refPasswordInput = useRef();

  const singIn = () => {
    console.log(
      'sdasdasdasd=======>',
      email,
      'asdasdasdasdasd=============>',
      password,
    );
    if (email === null || email === undefined || email === '') {
      console.log('1');
      console.log('Invalid email');
    } else if (!validateEmail(email)) {
      console.log(validateEmail(email));
      console.log('2');
      console.log('Invalid email');
    } else {
      if (password !== undefined || password !== null || password !== '') {
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('device_type', 'android');

        axios({
          method: 'POST',
          url: 'https://cash-grab.reignsol.net/',
          data: data,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        })
          // fetch('https://cash-grab.reignsol.net/', {
          //   method: 'POST',
          //   body: data,
          // })
          .then(res => {
            console.log('ress===========>', res);
            // navigation.navigate(Constants.BottomBarNavigator);
          })
          .catch(e => console.log('in error =================>', e));
      } else {
        console.log('Invalid Password');
      }
    }
  };

  return (
    <View style={styles.parentView}>
      <View style={styles.headerChild}>
        <Image
          source={Images.logosplash}
          style={{height: '70%', width: '70%', resizeMode: 'contain'}}
        />
      </View>

      <View style={styles.contentChild}>
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <Text style={{fontSize: 28, color: Colors.white, fontWeight: 'bold'}}>
            Log In
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
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: Colors.black2,
                height: 65,
                paddingTop: 40,
                paddingRight: 20,
                paddingBottom: 20,
                paddingLeft: 15,
                marginHorizontal: 15,
                marginVertical: 10,
                borderRadius: 50,
              }}>
              <Image
                source={Images.logoapple}
                style={{
                  position: 'absolute',
                  top: 13,
                  start: 30,
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  tintColor: Colors.white,
                  marginStart: 25,
                }}
              />
              <Text
                style={{
                  color: Colors.white,
                  position: 'absolute',
                  start: 90,
                  top: 19,
                  fontSize: 17,
                  marginLeft: 20,
                }}>
                Continue with
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: Colors.orangeyRed,
                paddingTop: 40,
                paddingRight: 20,
                paddingBottom: 20,
                paddingLeft: 15,
                marginHorizontal: 15,
                marginVertical: 10,
                borderRadius: 100,
                width: 65,
                height: 65,
              }}>
              <Image
                source={Images.logogoogle}
                style={{
                  position: 'absolute',
                  top: 17,
                  start: -1,
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  tintColor: Colors.white,
                  marginStart: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: Colors.denimBlue,
                // width: '45%',s
                paddingTop: 40,
                paddingRight: 20,
                paddingBottom: 20,
                paddingLeft: 15,
                marginHorizontal: 15,
                marginVertical: 10,
                borderRadius: 100,
                width: 65,
                height: 65,
              }}>
              <Image
                source={Images.logofacebook}
                style={{
                  position: 'absolute',
                  top: 17,
                  start: -1,
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  tintColor: Colors.white,
                  marginStart: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <View style={[styles.horinzontalLine, {flex: 1}]} />
          <Text
            style={{
              color: Colors.veryLightPink,
              textAlign: 'center',
              marginHorizontal: 20,
              fontSize: 18,
            }}>
            Or Email
          </Text>
          <View style={[styles.horinzontalLine, {flex: 1}]} />
        </View>
        <View
          style={{
            marginTop: 20,
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
              value={email}
              blurOnSubmit={true}
              placeholder="Email Address"
              style={{color: '#fff'}}
              onChangeText={text => setEmail(text)}
              onSubmitEditing={() => refPasswordInput.current.focus()}
            />
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
              secureTextEntry={passwordVisibility}
              placeholderTextColor={Colors.lightGrey}
              autoCapitalize="none"
              blurOnSubmit={true}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={{color: '#fff', paddingHorizontal: 10}}
              ref={refPasswordInput}
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
              // backgroundColor: 'red',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: Colors.white,
                opacity: 0.8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Forgot Password?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => singIn()}
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
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Constants.SignUp)}
            style={{
              // backgroundColor: 'red',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 35,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: Colors.white,
                opacity: 0.8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Don't have any account?{' '}
              <Text style={{color: Colors.paleSalmon}}>Sign Up</Text>
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
    flex: 4,
    backgroundColor: Colors.black3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  horinzontalLine: {
    height: 0.5,
    backgroundColor: Colors.veryLightPink,
  },
});

export default Login;
