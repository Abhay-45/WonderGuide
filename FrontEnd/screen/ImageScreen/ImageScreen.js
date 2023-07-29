import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking , ScrollView} from 'react-native'
import styles from './styles'

const ImageScreen = ({ route, navigation }) => {
  const { status, imageLink, latitude, longitude, title, wikiTitle, summary, wikiUrl } = route.params
  console.log("ImageScreen", route.params)

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {wikiTitle}
        </Text>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: imageLink }}
            style={styles.image}
          />
        </View>
        <Text style={styles.summary}>
          {summary.substring(0,350)} ....
        </Text>

        <TouchableOpacity 
            onPress={() => Linking.openURL(wikiUrl)}
            style={styles.buttonReadMore}
        >
          <Text style={styles.link}>
            Read More
          </Text>
        </TouchableOpacity>


      </View>
    </View>
    </ScrollView>
    
  )
}

export default ImageScreen