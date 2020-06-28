import React,{useState,useEffect} from 'react'
import { Text, View, Button,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchData from './FetchData';

export default function Covid19({ route, navigation }) {
  return(
      <View>
        <FetchData url="https://covidtracking.com/api/v1/states/ma/current.json" />
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
