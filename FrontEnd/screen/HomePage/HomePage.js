import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './style';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text>Home</Text> */}
            <Image
                source={require('../../assets/images/logo-no-background.png')}
                style={styles.logo}
            />
            {/* <Text>
                Welcome to WonderGuide!
            </Text> */}
            <Text style={styles.text1}>
                Ever wondered about the amazing monuments in your city?
            </Text>
            <Text>
                Take a photo, confirm and read about the monument! No more wondering
            </Text>
            <Image
            source={require("../../assets/images/triangle.png")}
            style={styles.triangle}
            />
            <TouchableOpacity onPress={() => navigation.navigate('CameraImageNavigation')} style={styles.button}>
                <Text style={styles.buttonText}>
                    Let's go!
                </Text>
            </TouchableOpacity>




        </View>
    )
}

export default HomePage;