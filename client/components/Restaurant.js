import * as React from 'react';
import { Text, View, Button,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import background from '../assets/food.jpg';
import Card from '../container/Card';

export default function Restaurant({ route, navigation }) {
  return(
    <ImageBackground source={background} style={styles.backgroundImage}>
         <Card>
              <Text style={styles.highlight}> Mulan Taiwanese restaurant</Text>
              <Text style={styles.text}> 835 Main Street</Text>
              <Text style={styles.text}> 
              {`
                Mon. - Thu. & Sun.
                11 am - 9:30 pm
                Fri. & Sat
                11 am - 10:30 pm
                `
              } 
                
              </Text>
            </Card>    

            <Card>
              <Text style={styles.highlight}> Bonchon Waltham</Text>
              <Text style={styles.text}> 329 Moody St</Text>
              <Text style={styles.text}> 
              {`
                Mon. - Thu. & Sun.
                11:30 am - 10 pm
                Fri. & Sat
                11:30 am - 10:30 pm
                `
              } 
                
              </Text>
            </Card>    

            <Card>
              <Text style={styles.highlight}>Pho 1 Waltham</Text>
              <Text style={styles.text}> 374 Moody St</Text>
              <Text style={styles.text}> 
              {`
                Mon. - Thu. & Sun.
                11:30 am - 10 pm
                Fri. & Sat
                11:30 am - 10:30 pm
                Sun
                12 pm - 10 pm
                `
              } 
                
              </Text>
            </Card>   

          
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
