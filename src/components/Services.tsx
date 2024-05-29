import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/App';
import serviceBackground from '../assets/tenor_1.gif';

const services = [
  { id: 1, name: 'Chest one', outcome: 'Builds upper body strength and aesthetics.', color: '#ff9999' },
  { id: 2, name: 'Back one', outcome: 'Enhances posture, grip strength, and muscle balance.', color: '#ffcc99' },
  { id: 3, name: 'Leg one', outcome: 'Boosts overall strength and functional movement.', color: '#ffff99' },
  { id: 4, name: 'Shoulder', outcome: 'Improves shoulder stability and upper body aesthetics.', color: '#ccff99' },
  { id: 5, name: 'Arm', outcome: 'Enhances arm strength and muscle definition.', color: '#99ff99' },
  { id: 6, name: 'Glute', outcome: 'Strengthens lower body and promotes stability.', color: '#99ffcc' },
  { id: 7, name: 'Chest two', outcome: 'Builds strength and aesthetics.', color: '#99ffff' },
  { id: 8, name: 'Back two', outcome: 'Enhances posture and muscle balance.', color: '#99ccff' },
  { id: 9, name: 'Legs two', outcome: 'Boosts overall strength and movement.', color: '#cc99ff' },
];

const Services: React.FC = () => {
  const [visibleService, setVisibleService] = useState<number | null>(null);
  const navigation = useNavigation();

  return (
    <FastImage source={serviceBackground} style={globalStyles.background}>
      <ScrollView contentContainerStyle={globalStyles.servicesContainer}>
        <Text style={globalStyles.pageHeading}>Our Services</Text>
        {services.map((service) => (
          <View key={service.id} style={[globalStyles.serviceBox, { backgroundColor: service.color }]}>
            <Text style={globalStyles.serviceName}>{service.name}</Text>
            <TouchableOpacity
              style={globalStyles.outcomeButton}
              onPress={() => setVisibleService(visibleService === service.id ? null : service.id)}
            >
              <Text style={globalStyles.buttonText}>Outcomes</Text>
            </TouchableOpacity>
            {visibleService === service.id && (
              <Text style={globalStyles.outcomeText}>{service.outcome}</Text>
            )}
            <TouchableOpacity style={globalStyles.buyButton} onPress={() => navigation.navigate('Purchase')}>
              <Text style={globalStyles.buttonText}>Buy it</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    </FastImage>
  );
};

export default Services;
