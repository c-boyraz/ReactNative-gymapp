import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/App';
import profileImage from '../assets/profile.jpg';
import deadliftGif from '../assets/deadlift.gif';
import muscleGif from '../assets/muscle.gif';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <FastImage source={profileImage} style={globalStyles.image} />
      <FastImage source={deadliftGif} style={globalStyles.gif} />
      <FastImage source={muscleGif} style={globalStyles.gif} />
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
    </ScrollView>
  );
};

export default Home;
