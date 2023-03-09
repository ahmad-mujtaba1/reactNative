import {React, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {signup} from '../util/auth';
const SignUpPage = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const handleSignUp = async () => {
    try {
      let response = await signup(email, password);
      if ((response.status = '200')) {
        return navigation.navigate('LoginPage');
      }
    } catch (e) {
      console.log('error', e);
    }
  };
  const navigateToLogin = () => {
    return navigation.navigate('LoginPage');
  };
  const navigateToMainScreen = () => {
    // return navigation.navigate('mainScreen');
    handleSignUp();
  };
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={styles.color} style={styles.linearGradient}>
        <Text style={styles.SignUpLabel}>Sign Up</Text>
        <View style={{marginTop: 40}}>
          <Text style={styles.formField}>user name</Text>
          <TextInput
            style={styles.border}
            placeholder="username"
            onChangeText={setUserName}
          />
          <Text style={styles.formField}>Email</Text>
          <TextInput
            style={styles.border}
            placeholder="email"
            onChangeText={setEmail}
          />
          <Text style={styles.formField}>Password</Text>
          <TextInput
            style={styles.border}
            placeholder="password"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Text style={styles.formField}>Confirm password</Text>
          <TextInput
            style={styles.border}
            placeholder="confirm password"
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.SignUpButton}
            onPress={navigateToMainScreen}>
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: Platform.OS === 'ios' ? 50 : 30,
          }}>
          <TouchableOpacity
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
            style={[styles.buttons, {flex: 1, flexDirection: 'row'}]}>
            <Icon
              name="google"
              size={20}
              style={{backgroundColor: 'transparent'}}
            />
            <Text> Google</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: Platform.OS === 'ios' ? 70 : 20,
            color: 'purple',
          }}
          onPress={navigateToLogin}>
          Already have an Account?
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  color: ['#ffffff', '#ffffff', '#BDB5D5'],
  formField: {
    fontWeight: 'bold',
    color: 'grey',
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
    marginBottom: 5,
  },
  buttons: {
    width: '45%',
    height: Platform.OS === 'ios' ? '25%' : '35%',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'green',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpButton: {
    marginTop: Platform.OS === 'ios' ? 50 : 30,
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
  SignUpLabel: {
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#CBC3E3',
  },
});
export default SignUpPage;
