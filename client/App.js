import * as React from 'react';
import { Text,View,StyleSheet,Image,ImageBackground} from 'react-native';
import { Container, Header, Title, Left, Right, Body, Content} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import About from './components/About';
import Housing from './components/Housing';
import Covid19 from './components/Covid19';
import Restaurant from './components/Restaurant';
import ApartmentDetails from './components/ApartmentDetails';
import Sign from './components/Signin';
import background from './assets/blue.jpg';
import Review from './components/Review';

function HomeScreen({navigation}) {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View>
      <Button style={styles.topButton}
        icon={
          <Icon
            name="bank"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#008b8b',width:120}}
        title="Sign in/up"
        onPress={() => {
          navigation.navigate('Sign');
        }}
      />

      <Text style = {styles.text}>Welcome to the Waltham Community Forum. With the COVID-19 prevailing, there are a lot of arising
         concerns over the accessibility of food, daily supplies, and housing. Also, it will be important
         to get information about the number of peopled infected nearby.</Text>
      <Text style = {styles.text}>We build this forum so that people in Waltham can get informed about the operating status of restaurant, shops,
        houses for rent, and updates on COVID-19.</Text>
      <Text style = {styles.text}>Since this is a forum, there are places where people can post info they know and share with each other.</Text>
      <Image
        source={require('./assets/waltham.jpg')}
        style={{ height: 316, width: 375, marginTop: 15, marginBottom: 2}} />
    </View>
    <View style={styles.button}>
      <Button
        icon={
          <Icon
            name="bank"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#6A5ACD',width:85}}
        title="Houses"
        onPress={() => {
          navigation.navigate('Houses For Rent');
        }}
      />
      <Button
        icon={
          <Icon
            name="glass"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#0000FF',width:114}}
        title="Restaurants"
        onPress={() => {
          navigation.navigate('Restaurants Open Now');
        }}
      />
      <Button
        icon={
          <Icon
            name="ge"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#0000CD',width:105}}
        title="Covid-19"
        onPress={() => {
          navigation.navigate('Covid-19 Update');
        }}
      />
      <Button
        icon={
          <Icon
            name="info"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#00008B',width:70}}
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
      <Button
        icon={
          <Icon
            name="info"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#00008B',width:70}}
        title="Review"
        onPress={() => {
          navigation.navigate('Review');
        }}
      />
    </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Houses For Rent" component={Housing} />
        <Stack.Screen name="Restaurants Open Now" component={Restaurant} />
        <Stack.Screen name="Covid-19 Update" component={Covid19} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Sign" component={Sign}/>
        <Stack.Screen name="Review" component={Review}/>
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  topButton: {
    flexDirection: 'row-reverse',
  },
  button: {
    flexDirection: 'row',
  },
  text: {
    color:'black',
    fontSize:15,
    fontFamily:'Chalkduster, fantasy',
    fontWeight:'normal',
    marginTop: 10,
    marginRight:10,
    marginLeft:20,
    marginBottom:20,
    textAlign: 'center'
  },
  backgroundImage: {
    height:'100%',
    width:'100%',
  },
});
