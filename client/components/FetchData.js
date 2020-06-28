import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet,ImageBackground} from 'react-native';
import Card from '../container/Card';
import background from '../assets/covidpic.jpg';

const FetchData = ({url}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const getData = async () => {
      const result = await fetch(url)
      const data = await result.json()
      setData(data)
      setLoading(false)
    }

    useEffect(() => {getData();},[])

    if (loading){
      return (
        <Text>loading</Text>
      )
    } else {
      return (
        <ImageBackground source={background} style={styles.backgroundImage}>
          <View>
            <Card>
              <Text style = {styles.highlight}>Positive Cases Increase Today:</Text>
              <Text style = {styles.alarm}>{JSON.stringify(data.positiveIncrease,null,2)}</Text>
              <Text style = {styles.text}>Death Increase Today: {JSON.stringify(data.deathIncrease,null,2)}</Text>
              <Text style = {styles.text}>Hospitalized Increase Today: {JSON.stringify(data.hospitalizedIncrease,null,2)}</Text>
              <Text style = {styles.text}>Total Test Results: {JSON.stringify(data.totalTestResults,null,2)}</Text>
              <Text style = {styles.text}>Total Positive Cases: {JSON.stringify(data.positive,null,2)}</Text>
              <Text style = {styles.text}>Total Death: {JSON.stringify(data.death,null,2)}</Text>
              <Text style = {styles.text}>Total Hospitalized: {JSON.stringify(data.hospitalized,null,2)}</Text>
              <Text style = {styles.text}>Total Recovered: {JSON.stringify(data.recovered,null,2)}</Text>
              <Text style = {styles.text}>State: {JSON.stringify(data.state,null,2)}</Text>
              <Text style = {styles.text}>Last Update Time:</Text>
              <Text style = {styles.text}>{JSON.stringify(data.lastUpdateEt,null,2)}</Text>
            </Card>
          </View>
        </ImageBackground>
      )
    }
}

export default FetchData

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
  highlight:{
    textAlign:'center',
    fontSize: 20,
    fontWeight:'bold',
    color:'crimson',
    marginBottom:15,
    fontFamily:'Georgia',
  },
  alarm:{
    textAlign:'center',
    fontSize: 20,
    fontWeight:'bold',
    color:'crimson',
    marginBottom:15,
    fontFamily:'Chalkduster, fantasy',
  },
  text:{
    textAlign:'center',
    fontSize: 20,
    marginBottom:15,
    fontFamily:'Georgia',
  },
});
