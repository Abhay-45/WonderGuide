import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, ScrollView, Button } from 'react-native';
import styles from './style';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.pageWrapper}>
            <ScrollView>
                <KeyboardAvoidingView style={styles.pageContainer} behavior='height'>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assets/images/logo-no-background.png')}
                            style={styles.logo} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Create your account</Text>
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
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity 
                        style={styles.footerRouteText}
                        onPress={() => navigation.navigate("SignIn")}>
                            <Text style={styles.footerRouteText}>Sign In</Text>
                        </TouchableOpacity> 

                    </View>

                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    )
}

export default SignUp;