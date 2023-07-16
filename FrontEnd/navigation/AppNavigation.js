import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/HomePage/HomePage';
import CameraPage from '../screen/CameraPage/CameraPage';

import { FontAwesome } from '@expo/vector-icons'
import { COLORS } from '../constants/theme';
import React from 'react';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomePage') {
                        iconName = focused ? 'home' : 'home';
                        color = focused ? COLORS.primary : COLORS.grayDark
                        size = focused ? 30 : 30
                    } else if (route.name === 'CameraPage') {
                        iconName = focused ? 'camera' : 'camera';
                        color = focused ? COLORS.primary : COLORS.grayDark
                        size = focused ? 25 : 25
                    }
                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                showLabel: false,
            }}

        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={({ navigation }) => ({
                    headerShown: false,
                })}
            />
            <Tab.Screen
                name="CameraPage"
                component={CameraPage}
                options={({ navigation }) => ({
                    headerShown: false,
                })}
            />
        </Tab.Navigator>
  )
}

export default AppNavigation