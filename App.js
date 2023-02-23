import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
         name="Home"
         component={HomeScreen}
         options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Map"
        component={MapScreen}
        options={{
          headerStyle: {backgroundColor: '#044F4F'},
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontWeight: 'Bold'},
          title: "Return Home"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}