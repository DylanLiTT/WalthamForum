import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../container/Card.js';

export default function ApartmentDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text>Renter Name: {navigation.getParam('name')}</Text>
        <Text>Contact Info: {navigation.getParam('phone')} / {navigation.getParam('email')}</Text>
        <Text>Housing Address: {navigation.getParam('address')}</Text>
        <Text>Housing Layout: {navigation.getParam('bedroom')}b{navigation.getParam('bathroom')}b</Text>
        <Text>Expected Price: ${navigation.getParam('price')} per month</Text>
        <Text>Lease Term: {navigation.getParam('startDate')}-{navigation.getParam('endDate')}</Text>
        <Text>Additional Description: {navigation.getParam('comment')}</Text>
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
