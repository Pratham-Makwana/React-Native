import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const Selfie = () => {
  const [photo, setPhoto] = useState(null);

  const requestCameraPermission = async () => {
    try {
      let permission;

      // Handle Android Permissions
      if (Platform.OS === 'android') {
        permission = PERMISSIONS.ANDROID.CAMERA;
      }

      // Handle iOS Permissions
      if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.CAMERA;
      }

      // Request permission
      const granted = await request(permission);

      if (granted === RESULTS.GRANTED) {
        console.log('You can use the camera');
        const result = await launchCamera({
          mediaType: 'photo',
          cameraType : 'front',
        });
        console.log('==> Result', result);
        setPhoto(result?.assets[0]?.uri);   
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: 'Cool Photo App Camera Permission',
  //         message:
  //           'Cool Photo App needs access to your camera ' +
  //           'so you can take awesome pictures.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  const openCamera = () => {
    // launchCamera(
    //   {
    //     mediaType: 'photo', // We want a photo, not video
    //     cameraType: 'front', // Front camera (selfie)
    //     maxWidth: 300, // Limit the photo width to 300px
    //     maxHeight: 300, // Limit the photo height to 300px
    //     saveToPhotos: true, // Save the image to device's gallery
    //   },
    //   response => {
    //     if (response.didCancel) {
    //       console.log('User cancelled camera picker');
    //     } else if (response.errorCode) {
    //       console.error('Camera error:', response.errorMessage);
    //     } else {
    //       // If a photo is selected, store the URI in state
    //       setPhoto(response.assets[0].uri);
    //     }
    //   },
    // );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Take a Selfie</Text>
      <TouchableOpacity
        style={styles.markBtn}
        onPress={requestCameraPermission}>
        <Text style={styles.btnText}>Mark Attendance</Text>
      </TouchableOpacity>

      {photo && (
        <View style={styles.imageContainer}>
          <Text style={styles.label}>Your Selfie:</Text>
          <Image source={{uri: photo}} style={styles.imageBox} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageBox: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 10,
  },
  markBtn: {
    backgroundColor: '#000',
    padding: 10,
    width: '100%',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Selfie;
