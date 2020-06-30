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
              <Text style={styles.text1}> Mon. - Thu. & Sun.</Text>
              <Text style={styles.text1} > 11 am - 9:30 pm</Text>
              <Text style={styles.text1}> Fri. & Sat</Text>
              <Text style={styles.text1}> 11 am - 10:30 pm</Text>
              <Image source={{uri: 'https://1.bp.blogspot.com/-PiSHNu4kn0s/XWgK8zwev8I/AAAAAAAAcJI/CJZndxLCUDQ9U6PDS0KmI3juZjjSX7DxACKgBGAs/s1600/IMG_0125.png'}} style={{width: 300, height: 200}} />
        </Card>    

            <Card>
              <Text style={styles.highlight}> Bonchon Waltham</Text>
              <Text style={styles.text}> 329 Moody St</Text>
              <Text style={styles.text1}> Mon. - Thu. & Sun.</Text>
              <Text style={styles.text1} > 11:30 am - 10 pm</Text>
              <Text style={styles.text1}> Fri. & Sat</Text>
              <Text style={styles.text1}> 11:30 am - 10:30 pm</Text>
              <Image source={{uri: 'https://pbs.twimg.com/media/D3PIOD0W0AADeD9.jpg'}} style={{width: 300, height: 200}} />
            </Card>    

            <Card>
              <Text style={styles.highlight}>Pho 1 Waltham</Text>
              <Text style={styles.text}> 374 Moody St</Text>
              <Text style={styles.text1}> Mon. - Thu.</Text>
              <Text style={styles.text1} > 11:30 am - 10 pm</Text>
              <Text style={styles.text1}> Fri. & Sat</Text>
              <Text style={styles.text1}> 11:30 am - 10:30 pm</Text>
              <Text style={styles.text1}> Sun.</Text>
              <Text style={styles.text1}> 12 pm - 10 pm</Text>
              <Image source={{uri: 'https://cdn.usarestaurants.info/assets/uploads/57e5764f29542c7fca477dce9fbea914_-united-states-massachusetts-middlesex-county-waltham-pho-1-waltham-781-891-6977htm.jpg'}} style={{width: 300, height: 200}} />
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
  text:{
    fontFamily: "Georgia",
    fontSize: 20,
    textAlign:"center",
    marginBottom:10,
  },

  text1:{
    fontFamily: "Times New Roman",
    fontSize: 16,
    textAlign:"center",
    
  },

  highlight:{
    fontFamily: "Georgia",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:10,
  }

});
