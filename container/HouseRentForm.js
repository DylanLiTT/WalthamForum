import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';

export default function HouseRentForm({ addApt }) {
  return (
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
          <View>
            <TextInput
              style={styles.input}
              placeholder='your name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder='your phone number'
              onChangeText={props.handleChange('phone')}
              value={props.values.phone}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='your email address'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder='house address'
              onChangeText={props.handleChange('address')}
              value={props.values.address}
            />
            <TextInput
              style={styles.input}
              placeholder='number of bedrooms'
              onChangeText={props.handleChange('bedroom')}
              value={props.values.bedroom}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='number of bathrooms'
              onChangeText={props.handleChange('bathroom')}
              value={props.values.bathroom}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='expected $ per month'
              onChangeText={props.handleChange('price')}
              value={props.values.price}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder='rental date starting from'
              onChangeText={props.handleChange('startDate')}
              value={props.values.startDate}
            />
            <TextInput
              style={styles.input}
              placeholder='rental date ending at'
              onChangeText={props.handleChange('endDate')}
              value={props.values.endDate}
            />
            <TextInput
              style={styles.input}
              placeholder='additional comments'
              onChangeText={props.handleChange('comment')}
              value={props.values.comment}
            />
            <Button title='submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
        </Formik>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {

  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
