import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/App';
import operatorImage from '../assets/operator.png';

const Contact: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Contact Us</Text>
      <Image source={operatorImage} style={globalStyles.image} />
      <Text>Email: lihtnegym@example.com</Text>
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={globalStyles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('About')}>
          <Text style={globalStyles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Services')}>
          <Text style={globalStyles.buttonText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Contact')}>
          <Text style={globalStyles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;
