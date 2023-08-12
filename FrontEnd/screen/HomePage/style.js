import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
    },

    container: {
        justifyContent: "center",
        alignItems:"center",
        padding: SIZES.large
    },

    button: {
        backgroundColor: COLORS.primary,
        padding: SIZES.medium,
        width: 130,
        borderRadius: 10,
        textAlign: "center",

    },
    buttonText: {
        color:'white',
        fontSize: SIZES.medium
    },

    text1: {
        marginTop:SIZES.small,
        padding: SIZES.xLarge,
        textAlign: "center",
        fontSize: SIZES.large,
        lineHeight: 30
    },

    triangle: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        margin: SIZES.medium
    
    }
})

export default styles;