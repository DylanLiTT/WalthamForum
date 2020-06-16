import * as React from 'react';
import { Text, View, Button,StyleSheet,Image,TextStyle} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import kexin from '../assets/kexin.jpg';


export default function KexinBio({ route, navigation }) {
  /* 2. Get the param */
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Kexin Zhang Bio</Text>
      <Image source={kexin} style={styles.logo} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
  width: 175,
  height: 275,
  marginTop: 20,
  },
  text: {
  color:'#000000',
  fontSize:20,
  fontWeight:'bold',
  marginTop: 20,
  },
});
