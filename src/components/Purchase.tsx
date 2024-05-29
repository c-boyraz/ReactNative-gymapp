import React from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import globalStyles from '../styles/App';
import creditCardGif from '../assets/credit_card_1.gif';
import contactlessIcon from '../assets/contactless.png';

const Purchase: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.purchaseContainer}>
      <Text style={globalStyles.heading}>Purchase Page</Text>
      <View style={globalStyles.orderContainer}>
        <Text style={globalStyles.subHeading}>Your Order</Text>
        <View style={globalStyles.table}>
          <View style={globalStyles.tableRow}>
            <Text style={globalStyles.tableHeader}>Item</Text>
            <Text style={globalStyles.tableHeader}>Price</Text>
          </View>
          <View style={globalStyles.tableRow}>
            <Text style={globalStyles.tableCell}>Workout Plan 1</Text>
            <Text style={globalStyles.tableCell}>$30</Text>
          </View>
          <View style={globalStyles.tableRow}>
            <Text style={globalStyles.tableCell}>Workout Plan 2</Text>
            <Text style={globalStyles.tableCell}>$45</Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.personalInfoContainer}>
        <Text style={globalStyles.subHeading}>Personal Information</Text>
        <TextInput style={globalStyles.input} placeholder="Name" />
        <TextInput style={globalStyles.input} placeholder="Email" />
        <TextInput style={globalStyles.input} placeholder="Phone Number" />
        <TextInput style={globalStyles.input} placeholder="Address" />
      </View>
      <View style={globalStyles.paymentContainer}>
        <Text style={globalStyles.subHeading}>Payment Information</Text>
        <TextInput style={globalStyles.input} placeholder="Card Number" />
        <TextInput style={globalStyles.input} placeholder="Expiry Date" />
        <TextInput style={globalStyles.input} placeholder="CVV" secureTextEntry={true} />
        <Button title="Submit" onPress={() => alert('Purchase Submitted')} />
      </View>
      <View style={globalStyles.imageContainer}>
        <FastImage source={creditCardGif} style={globalStyles.image} />
        <FastImage source={contactlessIcon} style={globalStyles.icon} />
      </View>
    </ScrollView>
  );
};

export default Purchase;
