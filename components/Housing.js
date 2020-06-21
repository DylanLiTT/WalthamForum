import React, {useState} from 'react';
import useStickyState from '../useStickyState.js';
import { Text, View, Button, StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from '../container/Card.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import HouseRentForm from "../container/HouseRentForm";
import ApartmentDetails from './ApartmentDetails.js';
import background from '../assets/sky.jpg';

export default function Housing({ route, navigation }) {

  const[modalOpen, setModalOpen] = useState(false);

  const [apts, setApts] = useStickyState([
    {name:'sample', phone:'0000000000', email:'sample@gmail.com', address:'000 Sample Street',
    bedroom:'0', bathroom:'0', price:'0000', startDate:'1/1', endDate:'1/2', comment:'My house is good!'},
  ]);

  const addApt = (apt) => {
    apt.key = Math.random().toString();
    setApts((currentApts) => {
      return [apt, ...currentApts];
    });
    setModalOpen(false);
  }

  return(
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View style = {styles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modelContent}>
          <Button
            buttonStyle={{backgroundColor: '#008b8b',width:85}}
            title="close"
            onPress={() => {setModalOpen(true)}}
          />
          <HouseRentForm addApt={addApt} />
        </View>
      </Modal>

      <Button
        buttonStyle={{backgroundColor: '#008b8b',width:85}}
        title="New House For Rent"
        onPress={() => {setModalOpen(false)}}
      />

      <FlatList
        data={apts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ApartmentDetails', item)}>
            <Card>
              <Text style={styles.title}>{ item.address }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 5,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  },

  title: {

  },

  modalContent: {
    flex: 1,
  },

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },

});
