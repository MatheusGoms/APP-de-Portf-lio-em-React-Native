import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Projetos" component={ProjectsScreen} />
        <Tab.Screen name="Contato" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
