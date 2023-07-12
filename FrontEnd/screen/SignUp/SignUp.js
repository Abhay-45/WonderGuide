import { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';

const SignUp = () => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [confirmPassword, setConfirmPassword] = useState();

    return(
        <View style={styles.pageContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign Up</Text>
            </View>
            <View>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType='email-address'
                placeholder='Email'
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
            />
            <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
                secureTextEntry={true}
                placeholder='Confirm Password'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default SignUp;