import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './component/splashScreen';

export default function App() {
  return (
   <SplashScreen></SplashScreen>
  );
} 

const styles = StyleSheet.create({
  screen : {
   flex: 1
  },
});
