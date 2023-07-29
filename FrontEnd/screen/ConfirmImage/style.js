import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        // justifyContent: "center",
    },  

    imgContainer : {
        flex:1,
        width: "100%",
        height: "100%",
        alignItems: "center", 
        justifyContent: "center",
        // backgroundColor: COLORS.grayLight
    },

    image : {
        resizeMode: 'contain',
        display: "flex",
        // flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // marginTop: SIZES.small,
        height: "450px",
        width: "300px",
        // margin: 0
    },

    buttonContainer : {
        // backgroundColor: COLORS.grayDark,
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        height: 200,
        alignItems: "center",
    },

    buttonConfirm: {
        backgroundColor: COLORS.primary,
        width: "50%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.xSmall,
        marginBottom: SIZES.large
    },

    buttonRetake : {
        backgroundColor: COLORS.grayDark,
        width: "50%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.xSmall,
    },

    buttonText : {
        color: COLORS.white,
        fontSize: SIZES.medium,
        fontWeight: "500"
    }

})

export default styles