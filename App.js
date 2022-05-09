
import {
  Easing
} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators, TransitionPresets} from '@react-navigation/stack';

import HomeScreen from './App/screen/HomeScreen';
import FullTempleteScreen from './App/screen/FullTempleteScreen';

const Stack = createStackNavigator();
const config ={
  animation: 'spring',
  config:{
    stiffness: 1000,
    damping: 100,
    mass:5,
    overshootClamping:false,
    restDisplacementThresold:0.01,
    restSpeenThresold: 0.01
  }
}
const CloseConfig ={
  animation:'spring',
  config:{
    duration:500,
    easing:Easing.linear
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeScreen}
        screenOptions={{gestureEnabled: true,headerShown: false,  gestureDirection: 'horizontal',cardStyleInterpolator: CardStyleInterpolators .forHorizontalIOS,transitionSpec:{open:config,close:CloseConfig}}}
        headerMode="float">
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen headerShown={true} name="Templete" component={FullTempleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}