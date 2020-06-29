import React,{useState,useEffect} from 'react'
import { Text, View, Button,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchData from './FetchData';
import { TextInput } from 'react-native-paper';
import ReviewForm from './ReviewForm';

export default function Review({ route, navigation }) {
  return(
      <View>
        <Text>hello world</Text>
        <ReviewForm />
      </View>
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
