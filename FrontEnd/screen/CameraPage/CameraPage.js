import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ImgToBase64 from 'react-native-image-base64';

const CameraPage = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    MediaLibrary.requestPermissionsAsync();
    // Camera roll Permission
    const cameraStatus  = await Camera.requestCameraPermissionsAsync();
    if(cameraStatus.status === 'granted'){
      setHasCameraPermission(cameraStatus.status === 'granted');
    }
    else{
      alert('Sorry, we need camera roll permissions to make this work!');
    }

  };

  const handleCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      setPhoto(photo.uri);
      navigation.navigate('ConfirmImageNavigator', {
        // photoUrl: photo.uri,
        // base64: photo.base64,
      });
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    console.log(result);
  };

  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //  else if (photo !== '') {
  //   return <Text>No Photo</Text>;
  // }
   else {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={cameraType}
          ref={cameraRef}
        >
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('ImageScreenNavigator')}
          >
            <MaterialCommunityIcons
              style={{
                top: 55,
                left: 330,
                opacity: 1,
              }}
              name="close-circle"
              color={'white'}
              size={70}
            />
          </TouchableOpacity> */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 30,
              
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => takePicture()}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  borderWidth: 10,
                  borderColor: 'silver',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => takePicture()}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  borderWidth: 10,
                  borderColor: 'silver',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => takePicture()}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  borderWidth: 10,
                  borderColor: 'silver',
                }}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
};

export default CameraPage;
