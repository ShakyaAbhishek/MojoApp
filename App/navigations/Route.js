import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "../screen/HomeScreen";
import FullTempleteScreen from "../screen/FullTempleteScreen";

const Stack = createStackNavigator();

const Route=() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Templete" component={FullTempleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Route;
