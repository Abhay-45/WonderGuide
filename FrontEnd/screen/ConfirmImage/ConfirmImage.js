import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './style'

const ConfirmImage = ({ route, navigation }) => {
  const { photoUrl, base64 } = route.params

  React.useEffect(() => {
    console.log("ImageUrl : ", photoUrl)
  }, [])

  return (
    <View style={styles.container}>

        <ImageBackground
          source={{ uri: photoUrl }}
          style={styles.image}
        >         
        </ImageBackground>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonConfirm}
            onPress={() => navigation.navigate('ConfirmImageNavigator', {
              photoUrl: photoUrl,
              base64: base64,
            })}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRetake}
            onPress={() => navigation.navigate('CameraNavigator')}
          >
            <Text style={styles.buttonText}>Retake</Text>
          </TouchableOpacity>
        </View>

  
      

    </View>
  )
}

export default ConfirmImage