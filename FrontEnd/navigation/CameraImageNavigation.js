import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import CameraPage from '../screen/CameraPage/CameraPage';
import ConfirmImage from '../screen/ConfirmImage/ConfirmImage';
import ImageScreen from '../screen/ImageScreen/ImageScreen';

const Stack = createStackNavigator();

const CameraImageNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="CameraNavigator"
        component={CameraPage}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="ConfirmImageNavigator"
        component={ConfirmImage}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="ImageScreenNavigator"
        component={ImageScreen}
        options={{ headerShown: false }}
        />
        
    </Stack.Navigator>
  )
}

export default CameraImageNavigation;