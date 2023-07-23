import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './style'

const ConfirmImage = ({ route, navigation }) => {
  const { photoUrl, base64 } = route.params

  const getResults = () => {
    console.log("This is base64 type:   ", base64)
    fetch('http://127.0.0.1:5000/getResults',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base_64 : base64.substr(21)
      })
    })
    .then((response) => response.json())
    .then((Result) =>{
      console.log(Result)
    })
  }

  // React.useEffect(() => {
  //   console.log("ImageUrl : ", photoUrl)
  // }, [])

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
            onPress={() => getResults()}
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