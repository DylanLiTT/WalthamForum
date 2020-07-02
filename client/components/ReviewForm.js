import React,{useState,useEffect} from 'react'
import { Text, View, Button, StyleSheet, Image, ImageBackground, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchData from './FetchData';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import useStickyState from '../useStickyState.js';
import Card from '../container/Card.js';
import oneStar from '../assets/rating-1.png';
import twoStar from '../assets/rating-2.png';
import threeStar from '../assets/rating-3.png';
import fourStar from '../assets/rating-4.png';
import fiveStar from '../assets/rating-5.png';

export default function ReviewForm({ route, navigation }) {

  const [reviews, setReviews] = useStickyState([
    {rating:'3', comment:''},
  ]);

  const addReview = (review) =>{
    review.key = Math.random().toString();
    setReviews((currentReviews)=>{
      return[review,...currentReviews];
    });
  }

  const ratings={
      '1': oneStar,
      '2': twoStar,
      '3': threeStar,
      '4': fourStar,
      '5': fiveStar,
  };

  return(
      <View style = {styles.container}>
       <Formik
       initialValues={{rating:'',comment:''}}
       onSubmit={(values,actions)=>{
         actions.resetForm();
         addReview(values);
       }
       }
       >
         {(props) => (
           <View>
             <TextInput
              placeholder='Rating(1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
             />
            <TextInput
              placeholder='Short Comment'
              onChangeText={props.handleChange('comment')}
              value={props.values.comment}
             />
             <Button title='submit' color='maroon' onPress={props.handleSubmit} />

           </View>
         )}
       </Formik>

       <FlatList
         data={reviews}
         style={{marginTop:10}}
         keyExtractor={(item, index) => 'key'+index}
         renderItem={({ item }) => (
           <Card>
             <View>
               <img src={ratings[item.rating]} style={{height:20,width:100}}/>
               <Text style={{textAlign: 'left'}}>{ item.comment }</Text>
             </View>
           </Card>
         )}
       />
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  backgroundImage: {
    flex:5,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  },
});
