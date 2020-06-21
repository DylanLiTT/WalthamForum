import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../container/Card.js';

export default function ApartmentDetails({ route,navigation }) {

const {item} = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Text>Renter Name: {item.name}</Text>
        <Text>Contact Info: {item.phone} / {item.email}</Text>
        <Text>Housing Address: {item.address}</Text>
        <Text>Housing Layout: {item.bedroom}b{item.bathroom}b</Text>
        <Text>Expected Price: ${item.price} per month</Text>
        <Text>Lease Term: {item.startDate}-{item.endDate}</Text>
        <Text>Additional Description: {item.comment}</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
