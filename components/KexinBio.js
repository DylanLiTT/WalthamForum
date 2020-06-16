import * as React from 'react';
import { Text, View, Button,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import kexin from '../assets/kexin.jpg';
import col from '../assets/col.jpg';
import kzbackground from '../assets/kzbackground.jpg';

export default function KexinBio({ route, navigation }) {
  /* 2. Get the param */
  return (
    <ImageBackground source={col} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style = {styles.title}>Kexin Zhang Bio</Text>
      <Text style = {styles.subtitle}> Class of 2021</Text>
      <Text style = {styles.subline}> Applied Math, Computer Science, Economics</Text>
      <Image source={kexin} style={styles.logo} />
      <Text style = {styles.text}> kzsteph@brandeis.edu {'\n'}
        7815471811 {'\n'}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
    fontSize:22,
    fontWeight:'bold',
    marginTop: 20,
    justifyContent: 'center',
  },
  subtitle: {
    color:'#000000',
    fontSize:20,
    fontWeight:'bold',
    marginTop: 15,
    justifyContent: 'center',
  },
  subline: {
    color:'#000000',
    fontSize:18,
    fontWeight:'normal',
    marginTop: 15,
    justifyContent: 'center',
  },
  text: {
    color:'#000000',
    fontSize:18,
    fontWeight:'bold',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex:5,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  },
});
