import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import styles from './style';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.pageWrapper}>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.pageContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assets/images/logo-no-background.png')}
                            style={styles.logo} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Login to your account</Text>
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
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity
                            style={styles.footerRouteText}
                            onPress={() => navigation.navigate("SignUp")}>
                            <Text style={styles.footerRouteText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    )
}

export default SignIn;