import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import About from './src/components/About';
import Services from './src/components/Services';
import Contact from './src/components/Contact';
import Purchase from './src/components/Purchase';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Purchase" component={Purchase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
