import * as React from 'react';
import { Text, View, Button,StyleSheet,Image,ImageBackground,Listing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import background from '../assets/kzbackground.jpg';


export default function Housing({ route, navigation }) {
  return(
    <ImageBackground source={background}>
    </ImageBackground>
  );
}
