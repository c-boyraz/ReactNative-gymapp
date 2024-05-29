import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import globalStyles from '../styles/App';
import profileImage from '../assets/profile.jpg';

const About: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Image source={profileImage} style={globalStyles.image} />
      <Text style={globalStyles.heading}>About Me</Text>
      <Button
        title="View Certification"
        onPress={() => Linking.openURL('https://www.issaonline.com/company/certificate-validation')}
      />
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

export default About;
