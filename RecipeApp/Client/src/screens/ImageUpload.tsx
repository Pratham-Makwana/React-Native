import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

import {ImageContext, Images} from '../context/ImageContext';

const ImageUpload = () => {
  const {uploadImage, images} = useContext(ImageContext);
  // console.log("==",images);

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
            uploadImage(imageUrl?.uri, imageUrl?.type);
          }
        }
      },
    );
  };

  const renderImage = ({item}: {item: Images}) => (
    <View style={styles.imageContainer}>
      <Image source={{uri: item?.url}} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {images && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={renderImage}
          keyExtractor={item => item._id}
        />
      )}
      <TouchableOpacity style={styles.btn} onPress={selectImage}>
        <Text style={styles.btnTxt}>Select Image & Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    marginBottom: 20,
    marginHorizontal: 5,

    // alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    // resizeMode: 'cover',
  },
  imageText: {
    marginTop: 10,
    fontSize: 12,
    color: '#555',
  },
  btn: {
    backgroundColor: '#4287f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
