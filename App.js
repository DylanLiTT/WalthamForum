import * as React from 'react';
import { Text, View, Button,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KexinBio from './components/KexinBio';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to TeamBio"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('About');
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text>TeamBio</Text>
      <Button
        title = "Kexin Zhang"
        onPress = {()=>{
            navigation.navigate('KexinBio');
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="KexinBio" component={KexinBio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
