import { COLORS, SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        // height: "100%"
    },

    container : {
        flex: 1,
        minHeight: "100%",
        // height: "100%",
        alignItems: "center",
        justifyContent: "center",
        // margin: 30,
        
        // backgroundColor: COLORS.primary
    },

    card : {
        // flex: 1,
        backgroundColor: COLORS.white,
        // marginVertical: SIZES.small,
        // margin: 30,
        width: "95%",
        // height: "100%",
        minHeight: "100%",
        padding: SIZES.small,    
        alignItems: "center",
        borderRadius: 15
    },

    title : {
        textAlign: "center",
        fontSize: SIZES.large,
        fontWeight: "500",
        padding: SIZES.medium
    },

    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: SIZES.medium
    },

    image : {
        resizeMode: 'contain',
        display: "flex",
        // flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // marginTop: SIZES.small,
        height: "280px",
        width: "280px",
        
    },

    summary : {
        textAlign: "center",
        fontSize: SIZES.medium,
        fontWeight: "400",
        padding: SIZES.large
    },

    buttonReadMore : {
        backgroundColor: COLORS.primary,
        width: "50%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    link : {
        textAlign: "center",
        color: COLORS.white,
        fontSize: SIZES.medium
    }

})

export default styles;
