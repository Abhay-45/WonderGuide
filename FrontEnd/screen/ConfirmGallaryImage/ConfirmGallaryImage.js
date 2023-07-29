import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './style'
import * as ImagePicker from 'expo-image-picker';

const ConfirmGallaryImage = ({ route, navigation }) => {
    const { photoUrl, base64 } = route.params

    const pickImage = async () => {
        const options = { base64: true };
        let result = await ImagePicker.launchImageLibraryAsync(options, {
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
    
        console.log(result);
        // console.log(result)
        console.log(result.assets[0].base64)
        if (result.uri) {
          navigation.navigate("ConfirmGallaryImageNavigator", {
            photoUrl: result.assets[0].uri,
            base64: result.assets[0].base64,
          });
        }
      };

    const getResults = () => {
      // console.log("This is base64 type:", base64)
      fetch('http://127.0.0.1:5000/getResults', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // base_64: base64.substr(22)
          base_64: base64
        })
      })
        .then((response) => response.json())
        .then((Result) => {
          console.log(Result);
          console.log(Result.status)
          navigation.navigate('ImageScreenNavigator', {
            status: Result.status,
            imageLink : Result.image_link,
            latitude: Result.latitude,
            longitude: Result.longitude,
            title: Result.title,
            wikiTitle: Result.wiki_title,
            summary: Result.summary,
            wikiUrl: Result.wiki_url,
          })
        })
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <ImageBackground
            source={{ uri: photoUrl }}
            style={styles.image}
          >
          </ImageBackground>
        </View>
  
  
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonConfirm}
            onPress={() => getResults()}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonRetake}
            onPress={() => pickImage()}
          >
            <Text style={styles.buttonText}>ReChoose</Text>
          </TouchableOpacity>
        </View>
  
  
  
  
      </View>
    )
}

export default ConfirmGallaryImage