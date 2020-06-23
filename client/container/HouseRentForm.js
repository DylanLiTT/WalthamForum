import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, ImageBackground} from 'react-native';
import { Formik } from 'formik';
import background from '../assets/blcwood.jpg';

export default function HouseRentForm({ addApt }) {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Formik
        initialValues={{name:'', phone:'', email:'', address:'', bedroom:'', bathroom:'',
                        price:'', startDate:'', endDate:'', comment:''}}
        onSubmit={(values, actions)=>{
          actions.resetForm();
          addApt(values);
        }}
      >
        {(props)=>(
          <View >
            <TextInput
              style={styles.input}
              placeholder='your name'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder='your phone number'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('phone')}
              value={props.values.phone}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='your email address'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder='house address'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('address')}
              value={props.values.address}
            />
            <TextInput
              style={styles.input}
              placeholder='number of bedrooms'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('bedroom')}
              value={props.values.bedroom}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='number of bathrooms'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('bathroom')}
              value={props.values.bathroom}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='expected $ per month'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('price')}
              value={props.values.price}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='rental date starting from'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('startDate')}
              value={props.values.startDate}
            />
            <TextInput
              style={styles.input}
              placeholder='rental date ending at'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('endDate')}
              value={props.values.endDate}
            />
            <TextInput
              style={styles.input}
              placeholder='additional comments'
              placeholderTextColor = '#dcdcdc'
              onChangeText={props.handleChange('comment')}
              value={props.values.comment}
            />
            <Button title='submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
        </Formik>
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
    height:'100%',
    width:'100%',
    //resizeMode:'cover',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    alignItems: 'center',
    color:'white',
  },
});
