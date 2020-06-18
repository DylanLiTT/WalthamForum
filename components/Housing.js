import * as React from 'react';
import { Text, View, Button,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import background from '../assets/kzbackground.jpg';
import HouseRentForm from "../container/HouseRentForm";


export default function Housing({ route, navigation }) {
  return(
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View style = {styles.container}>
      <HouseRentForm data={[{}]} style = {styles.container}/>
    </View>
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
