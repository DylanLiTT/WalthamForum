import * as React from 'react';
import { Text, View, Button,StyleSheet,Image,ImageBackground,Listing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import background from '../assets/kzbackground.jpg';


export default function Restaurant({ route, navigation }) {
  return(
    <ImageBackground source={background} style={styles.backgroundImage}>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex:5,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  },
});
