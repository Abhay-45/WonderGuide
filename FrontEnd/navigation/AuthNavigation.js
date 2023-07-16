import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from '../screen/SignUp/SignUp';
import SignIn from '../screen/SignIn/SignIn';
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />    */}
            <Stack.Screen
                name="AppNavigator"
                component={AppNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigation;