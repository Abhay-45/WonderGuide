import { View, Text, Image } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './style';

const HomePage = (navigation) => {
    return (

        <View>
            <Text>Home</Text>
            <Image
                source={require('../../assets/images/logo-no-background.png')}
                style={styles.logo}
                 />
        </View>
    )
}

export default HomePage;