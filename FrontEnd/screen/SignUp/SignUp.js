import { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    KeyboardAvoidingView, 
    Image, 
    ScrollView, 
    Button } from 'react-native';
import * as Yup from 'yup';
import styles from './style';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(false);
    const [registerFailed, setRegisterFailed] = useState(false);

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().email('Invalid email').required('Email is required'),
    //     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    //     confirmPassword: Yup.string()
    //       .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //       .required('Confirm Password is required'),
    //   });


    const handleSubmit = async ({email, password, confirmPassword}) => {
        // console.log("inhandlesubmit")
        // const isValidUser = validationSchema.validate({email, password, confirmPassword})
        // console.log(isValidUser)
        // console.log(isValidUser["PromiseState"])

        try {
            let response = await fetch(
                "http://127.0.0.1:5000/register",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                }
            )

            let json = await response.json()

            if (json["status"] === "success") {
                console.log("Registration Successful");
                setErrorMessage(false);
                setRegisterFailed(false);
                navigation.navigate("SignIn");
            } else {
                console.log("Registration Failed");
                setErrorMessage(true);
                setRegisterFailed(true);
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit({email,password, confirmPassword})} >
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