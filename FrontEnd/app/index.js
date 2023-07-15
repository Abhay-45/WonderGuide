import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from '../screen/SignUp/SignUp';
import SignIn from '../screen/SignIn/SignIn';
import HomePage from '../screen/HomePage/HomePage';

const Stack = createStackNavigator();

const Home = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />   
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ headerShown: false }}
                />  
            </Stack.Navigator>
    )

}

export default Home;