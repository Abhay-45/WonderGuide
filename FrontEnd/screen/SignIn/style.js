import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: "center",
    },

    titleContainer: {
        // padding: SIZES.small,
    },

    title: {
        fontSize: SIZES.large,
        fontWeight: '500',
        // margin: SIZES.small,
        marginHorizontal: SIZES.xxLarge,
        marginVertical: SIZES.medium

        
    },

    pageWrapper: {
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    logoContainer:{
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: COLORS.primary
    },
    logo:{
        resizeMode: 'contain',
        height: 100,
        width: 150,
    },

    input: {
        height: 55,
        marginVertical: SIZES.small,
        marginHorizontal: SIZES.xxLarge,
        
        // padding: SIZES.small,
        paddingLeft: SIZES.medium,
        borderRadius: SIZES.xSmall,
        backgroundColor: COLORS.grayLight,
    },

    buttonContainer: {
        height: 55,
        marginVertical: SIZES.small,
        marginHorizontal: SIZES.xxLarge,
        padding: SIZES.small,
        borderRadius: SIZES.xSmall,
        backgroundColor: COLORS.primary,
        justifyContent: "center"
    },

    buttonText: {
        textAlign: "center",
        textTransform: "uppercase",
        color: COLORS.white,
        fontSize: SIZES.medium
    }, 

    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SIZES.small
    },

    footerText: {
        textAlign: "center",
        marginRight: SIZES.xSmall
    },

    footerRouteText: {
        color: COLORS.primary
    },

})

export default styles;