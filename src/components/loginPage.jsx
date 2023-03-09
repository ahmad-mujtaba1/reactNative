import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  onFacebookButtonPress,
  handleSignIn,
  onGoogleButtonPress,
} from '../util/auth';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

GoogleSignin.configure({
  webClientId:
    '869359136247-dhn54h9ij8sidkuo4e3eskk7o3t7uj0s.apps.googleusercontent.com',
});

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const navigateFunction = () => {
    return navigation.navigate('SignUpPage');
  };
  const navigateToProducts = () => {
    handleSignIn(email, password);
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#ffffff', '#ffffff', '#BDB5D5']}
        style={styles.linearGradient}>
        <Text
          style={{
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            color: '#CBC3E3',
          }}>
          Sign In
        </Text>
        <View style={Platform.OS === 'ios' ? {marginTop: 70} : {marginTop: 40}}>
          <Text style={{fontWeight: 'bold', marginBottom: 10, color: 'grey'}}>
            Email
          </Text>
          <TextInput
            style={styles.border}
            placeholder="username"
            onChangeText={setEmail}
          />
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: 10,
              color: 'grey',
            }}>
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            style={styles.border}
            placeholder="password"
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.SignInButton}
            onPress={navigateToProducts}>
            <Text> Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonsView}>
          <TouchableOpacity
            onPress={() => onFacebookButtonPress()}
            style={[
              styles.buttons,
              {flex: 1, flexDirection: 'row', marginRight: 9},
            ]}>
            <Icon
              name="facebook"
              size={20}
              style={{backgroundColor: 'transparent'}}
            />
            <Text> Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onGoogleButtonPress}
            style={[styles.buttons, {flex: 1, flexDirection: 'row'}]}>
            <Icon
              name="google"
              size={20}
              style={{backgroundColor: 'transparent'}}
            />
            <Text> Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bottomAnchor} onPress={navigateFunction}>
          Don't you have an account?
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomAnchor: {
    textAlign: 'center',
    color: 'purple',
    marginBottom: Platform.OS === 'ios' ? 70 : 30,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  border: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    borderRadius: 7,
    height: 40,
  },
  buttons: {
    width: '45%',
    height: Platform.OS === 'ios' ? '18%' : '28%',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'green',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignInButton: {
    marginTop: 40,
    height: 40,
    alignSelf: 'stretch',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBC3E3',
  },
  ButtonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'ios' ? 70 : 50,
  },
});
export default LoginPage;
