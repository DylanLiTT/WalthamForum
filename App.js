import * as React from 'react';
import { Text, View,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import About from './components/About';
import Housing from './components/Housing';
import Covid19 from './components/Covid19';
import Restaurant from './components/Restaurant';
import background from './assets/grey.jpg';


function HomeScreen({navigation}) {
  return (
    <ImageBackground source={background} style={styles.background}>
    <View style={styles.container}>
      <Button
        icon={
          <Icon
            name="bank"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#008b8b',width:85}}
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
        buttonStyle={{backgroundColor: '#6b8e23',width:114}}
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
        buttonStyle={{backgroundColor: '#daa520',width:105}}
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
        buttonStyle={{backgroundColor: '#b8860b',width:68}}
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
    <View style = {styles.text}>
    <Text>Welcome to the Waltham Community Forum. With the COVID-19 prevailing, there are a lot of arising
       concerns over the accessibility of food, daily supplies, and housing. Also, it will be important
       to get information about the number of peopled infected nearby.</Text>
    <Text>We build this forum so that people in Waltham can get informed about the operating status of restaurant, shops,
      houses for rent, and updates on COVID-19.</Text>
    <Text>Since this is a forum, there are places where people can post info they know and share with each other.</Text>
    </View>
    <Image source = {background} />
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options = {{
          headerRight: () => (
           <Button
             icon={
               <Icon
                 name="list"
                 size={20}
                 color="white"
               />
             }
             buttonStyle={{backgroundColor: '#b8860b'}}
             onPress={() => alert('This is a button!')}
           />
         ),
        }}/>
        <Stack.Screen name="Houses For Rent" component={Housing} />
        <Stack.Screen name="Restaurants Open Now" component={Restaurant} />
        <Stack.Screen name="Covid-19 Update" component={Covid19} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  text: {
    color:'#000000',
    fontSize:15,
    fontWeight:'bold',
    marginTop: 10,
    marginRight:20,
    marginLeft:20,
    marginBottom:15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  backgroundImage: {
    felx:2,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  },
});
