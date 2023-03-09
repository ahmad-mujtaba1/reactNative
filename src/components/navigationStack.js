import React from 'react';
import LoginPage from './loginPage';
import SignUpPage from './SignUp';
import MainComponent from './mainPage';
import CardView from './CartView';
import ProductDetails from './productDetailModal';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const StackToRender = () => {
  const isLogin = useSelector(state => state.authReducer.emailToken);
  function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
      </Stack.Navigator>
    );
  }

  function MainStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="mainScreen" component={MainComponent} />
        <Stack.Screen name="cartScreen" component={CardView} />
        <Stack.Screen name="productDetail" component={ProductDetails} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {isLogin === null ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};
export default StackToRender;
