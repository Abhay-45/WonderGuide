import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from '../screen/SignUp/SignUp';
import SignIn from '../screen/SignIn/SignIn';
import HomePage from '../screen/HomePage/HomePage';
import AuthNavigation from '../navigation/AuthNavigation'


const Stack = createStackNavigator();

const Home = () => {
    return (
            <AuthNavigation />    
    )

}

export default Home;