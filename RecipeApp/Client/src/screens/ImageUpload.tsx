import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState} from 'react';
import {
  launchImageLibrary,
  launchCamera,
  ImagePickerResponse,
} from 'react-native-image-picker';

import axios from 'axios';
import {API_URL} from '../context/AuthContext';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null | undefined>(
    null,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const selectImage = (): void => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User Cancle image Picker');
        } else if (response.errorMessage) {
          console.log('Image Picker Error', response.errorMessage);
        } else {
          let imageUrl = response.assets?.[0];
          // console.log('==> openGallary', imageUrl);
          if (imageUrl) {
            setSelectedImage(imageUrl?.uri);
            uploadImage(imageUrl?.uri, imageUrl?.type);
          }
        }
      },
    );
  };

  const uploadImage = async (uri: any, type: any) => {
    console.log("==> called UplaodUImages");
    
    if (!uri) {
      setError('No image selected');
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('image', {
      uri,
      type: type,
      name: 'image.jpg',
    });
    // console.log("==> formdata",formData._parts[0]);
    console.log("==> formdata",formData);
    // {"_parts": [["image", [Object]]]}

    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully', response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Failed to upload image');
      setLoading(false);
    }
  };

  // const handCameraLaunch = () => {
  //   launchCamera(
  //     {
  //       mediaType: 'photo',
  //       includeBase64: true,
  //     },
  //     response => {
  //       if (response.didCancel) {
  //         console.log('User Cancle image Picker');
  //       } else if (response.errorMessage) {
  //         console.log('Image Picker Error', response.errorMessage);
  //       } else {
  //         let imageUrl = response.assets?.[0];
  //         // console.log('==> Camera ', imageUrl);
  //         if (imageUrl) {
  //           console.log('==> Camera ', imageUrl);
  //           setSelectedImage(imageUrl);
  //           uploadImage(imageUrl);
  //         }
  //       }
  //     },
  //   );
  // };
  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{width: 200, height: 200}}
        />
      )}
      {loading && <Text>Uploading...</Text>}
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      <TouchableOpacity onPress={selectImage}>
        <Text>Select Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
