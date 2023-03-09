import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useState} from 'react';
const SplashScreen = ({navigation}) => {
  return (
    <LottieView source={require('../../assets/splash.json')} autoPlay loop />
  );
};

export default SplashScreen;
