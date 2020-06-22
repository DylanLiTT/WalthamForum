import * as React from 'react';
import { Text, View, Button,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import background from '../assets/whitewall.jpg';
import bios from '../assets/bios'

export default function About({ route, navigation }) {
  return(
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View style={styles.container}>
      {bios.map(bio => (
      <View style={styles.card}>
      <View style = {{alignItems: 'center'}}>
        <Image
          source={bio.img.src}
          style={{ height: 350, width: 250}} />
        <Text style = {styles.title}>{bio.name}</Text>
        <Text style = {styles.text}>{bio.email}</Text>
        <Text style = {styles.text}>{bio.year}</Text>
        <Text style = {styles.text}>{bio.major}</Text>
        <Text style = {styles.text}>{bio.hobby}</Text>
      </View>
      </View>
      ))}
    </View>
    </ImageBackground>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    logo: {
      width: 175,
      height: 275,
      marginTop: 20,
    },
    title: {
      color:'#000000',
      fontSize:20,
      fontWeight:'bold',
      marginTop: 20,
      justifyContent: 'center',
    },
    card: {
      backgroundColor:'#eee',
      borderRadius: 10,
      overflow: "hidden",
      marginBottom:20,
      padding:10,
      width:325,
    },
    text: {
      color:'#000000',
      fontSize:15,
      fontWeight:'normal',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    backgroundImage: {
      flex:5,
      height:'100%',
      width:'100%',
      resizeMode:'cover',
    },
  });
