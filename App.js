import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import axios from 'axios';

const Stack = createStackNavigator();

export default function App() {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  axios.defaults.params = {
    api_key: '7eb39829f38e30baf56c8d1bb8fe05ad',
    language: 'en-US'
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'MovieApp',
            headerStyle: {
              backgroundColor: '#3f51b5'
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Ionicons
                name="md-person"
                size={24}
                color="#fff"
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate('Profile')}
              />
            )
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ 
            title: 'Movie Detail',
            headerStyle: {
              backgroundColor: '#3f51b5'
            }, 
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#3f51b5'
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}