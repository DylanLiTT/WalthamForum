import * as React from 'react';
import { Text, View, Button,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from './components/About';
import Housing from './components/Housing';
import Covid19 from './components/Covid19';
import Restaurant from './components/Restaurant';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="House For Rent"
        onPress={() => {
          navigation.navigate('Housing');
        }}
      />
      <Button
        title="Restaurants Open Now"
        onPress={() => {
          navigation.navigate('Restaurant');
        }}
      />
      <Button
        title="Covid-19 Update"
        onPress={() => {
          navigation.navigate('Covid19');
        }}
      />
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Housing" component={Housing} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Covid19" component={Covid19} />
        <Stack.Screen name="About" component={About} />
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
