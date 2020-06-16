import * as React from 'react';
import { Text, View, Button,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const bios = [
  {name:"Kailin Liu",
   age:21,
},
  {name:"Kexin Zhang",
   age:21,
},
  {name:"Wentao Li",
  age:20,
},
  {name:"Jian Yu",
  age:20,
},
]

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TeamBio</Text>
      {bios.map(bio => (
        <Button
          title={"Go to bio for "+bio.name}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('BioDetails', bio);
          }}
        />
      ))}
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { name } = route.params;
  const { age } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BioDetails</Text>
      <Text>itemId: {JSON.stringify(name)}</Text>
      <Text>otherParam: {JSON.stringify(age)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="BioDetails" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
