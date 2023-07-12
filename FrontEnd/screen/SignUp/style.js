import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({

    input: {
        height: 50,
        marginVertical: SIZES.small,
        marginHorizontal: SIZES.large,
        padding: SIZES.small,
        borderRadius: SIZES.xSmall,
        backgroundColor: COLORS.grayLight
    },

    pageContainer : {
        backgroundColor: '#FFFFFF',
        height: "100%",
        width: "100%",
    },

    titleContainer:{
        marginTop: "30%",
        marginBottom: 10,
        
    },

    title:{
        fontSize: SIZES.xxLarge,
        fontWeight: 'bold',
        margin: SIZES.small,
        textAlign: "center",
    },

    buttonText:{
        textAlign: "center",
        textTransform: "uppercase",
        color: COLORS.white,
        fontSize: SIZES.medium
    },

    button:{
        height: 50,
        marginVertical: SIZES.small,
        marginHorizontal: SIZES.large,
        padding: SIZES.small,
        borderRadius: SIZES.xSmall,
        backgroundColor: COLORS.primary
    }

})

export default styles;