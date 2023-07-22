import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    fileImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    cameraButton: {
        backgroundColor: 'white',
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 10,
        borderColor: 'silver',
    }
})

export default styles;