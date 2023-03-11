import axios from 'axios';
import {API_KEY} from '../redux/constants';
import {store} from '../redux/store/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {
  SimpleSignIn,
  storeToken,
  FacebookSignIn,
  googleSignIn,
} from '../redux/actions/authActions';

export const signup = (email, password) => {
  const url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs7IXTApgJttIuFffLqKA9X_-NrPn59vk';
  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

export const login = (email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};
export const handleSignIn = async (email, password) => {
  try {
    let response = await login(email, password);
    if ((response.status = '200')) {
      store.dispatch(SimpleSignIn(true));
      store.dispatch(storeToken(response?.data?.idToken));
    }
  } catch (e) {
    console.log('error', e);
  }
};

export const onGoogleButtonPress = async () => {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const userSignIn = auth().signInWithCredential(googleCredential);
  userSignIn.then(user => console.log(user)).catch(e => console.log(e));
  if (await userSignIn) {
    store.dispatch(storeToken(await (await userSignIn).user.uid));
    store.dispatch(googleSignIn(true));
  }
};

export async function onFacebookButtonPress() {
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  const userSignIn = auth().signInWithCredential(facebookCredential);
  userSignIn.then(user => console.log(user)).catch(e => console.log(e));
  if (userSignIn) {
    store.dispatch(storeToken((await userSignIn).user.uid));
    store.dispatch(FacebookSignIn(true));
  }
}

export const handleLogout = state => {
  if (state.googleSignIn) {
    auth()
      .signOut()
      .then(() => console.log('user is logged out'));
    store.dispatch(storeToken(null));
    store.dispatch(googleSignIn(false));
  }
  if (state.facebookSignIn) {
    auth()
      .signOut()
      .then(() => console.log('user is logged out'));
    store.dispatch(FacebookSignIn(false));
    store.dispatch(storeToken(null));
  }
  if (state.simpleSignIn) {
    store.dispatch(SimpleSignIn(false));
    store.dispatch(storeToken(null));
  }
};
