import React,{useState,useEffect} from 'react'
import { Text, View, Button,StyleSheet,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchData from './FetchData';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
export default function ReviewForm({ route, navigation }) {
  return(
      <View>
       <Formik 
       initialValues={{title: '', body:'',rating:''}}
       onSubmit={(values)=>{
          console.log.values;
       }
      }    
       >
         {(props) => (
           <View>
             <TextInput 
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
             />
            <TextInput 
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
             />
             <TextInput 
              placeholder='Review rating'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
             />
             <Button title='submit'onPress={props.handleSubmit} />
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
  backgroundImage: {
    flex:5,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  },
});
