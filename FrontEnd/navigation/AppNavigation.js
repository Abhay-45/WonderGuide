import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/HomePage/HomePage';
import CameraPage from '../screen/CameraPage/CameraPage';
import CameraImageNavigation from './CameraImageNavigation';
import { Image, StyleSheet, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'
import { COLORS } from '../constants/theme';
import React from 'react';

const Tab = createBottomTabNavigator();

const AppNavigation = (navigation) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                "tabBarShowLabel": false,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    height: 60
                },
            })}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/images/home.png')
                                    : require('../assets/images/home.png')
                            }
                            style={{ width: 35, height: 35 }}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="CameraImageNavigation"
                component={CameraImageNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/images/camera-button.png')
                                    : require('../assets/images/camera-button.png')
                            }
                            style={{ width: 35, height: 35 }}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({



})

export default AppNavigation