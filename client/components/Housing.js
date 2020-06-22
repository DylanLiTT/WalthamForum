import React, {useState, useEffect} from 'react';
import useStickyState from '../useStickyState.js';
import { Text, View,StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'modal-react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from '../container/Card.js';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HouseRentForm from "../container/HouseRentForm";
import ApartmentDetails from './ApartmentDetails.js';
import background from '../assets/street.jpg';
import { useAsyncStorage } from '@react-native-community/async-storage';

export default function Housing({ route, navigation }) {

  const[modalOpen, setModalOpen] = useState(false);

  const [apts, setApts] = useState([
    {name:'sample', phone:'0000000000', email:'sample@gmail.com', address:'000 Sample Street',
    bedroom:'0', bathroom:'0', price:'0000', startDate:'1/1', endDate:'1/2', comment:'My house is good!'},
  ]);

  const { getItem, setItem } = useAsyncStorage('counter');

  const readItemFromStorage = async () => {
    const item = await getItem()
    const newValue = JSON.parse(item)
    setApts(newValue)
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
    setApts(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const addApt = (apt) => {
    apt.key = Math.random().toString();
    writeItemToStorage([apt,...apts]);
    setModalOpen(false);
  }

  const deleteItem = (key) => {
    const newApts = apts.filter(x => x.key!=key)
    writeItemToStorage(newApts);
  }

  return(
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View style = {styles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modelContent}>
          <Button
            icon={
              <Icon style = {{marginRight:4}}
                name="close"
                size={24}
                color="white"
              />
            }
            buttonStyle={{backgroundColor: '#6b8e23',width:85}}
            title="Close"
            onPress={() => {setModalOpen(false)}}
          />
          <HouseRentForm  addApt={addApt} />
        </View>
      </Modal>

      <Button style = {{marginBottom:15}}
        icon={
          <Icon
            name="plus"
            size={24}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#6b8e23',width:200}}
        title="New House Available to Lease"
        onPress={() => {setModalOpen(true)}}
      />

      <FlatList
        data={apts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ApartmentDetails', {item})}>
            <Card>
              <Text style={styles.title}>{ item.address }</Text>
              <Button
                buttonStyle={{backgroundColor: '#008b8b',width:50}}
                title="delete"
                onPress={() => {
                  deleteItem(item.key)
                }}
              />
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
    marginTop:15,
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 5,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
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