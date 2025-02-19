import axios from 'axios';
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {API_URL} from './AuthContext';

export interface Images {
  _id: string;
  url: string;
  public_id: string;
  createdAt: string;
}
interface ImageContextData {
  images: Images[];

  uploadImage: (
    image: Omit<Images, '_id' | 'createdAt'> | undefined | string,
    type: any,
  ) => Promise<void>;
  fetchImage: () => Promise<void>;
}

export const ImageContext = createContext<ImageContextData>(
  {} as ImageContextData,
);

export const ImageProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [images, setImages] = useState<Images[]>([]);

  const uploadImage = async (uri: any, type: any) => {
    console.log('==> called UplaodUImages');

    // if (!uri) {
    //   setError('No image selected');
    //   return;
    // }

    const formData = new FormData();
    formData.append('image', {
      uri,
      type: type,
      name: 'image.jpg',
    });

    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('==> Image uploaded successfully', response.data?.image?.url);
      setImages([...images, response.data?.image?.url]);
    } catch (err) {
      console.error('Error uploading image:', err);
    }
  };

  const fetchImage = async () => {
    try {
      const result = await axios.get(`${API_URL}/api/getimages`);
      // console.log('==> FrontEnd', result.data.images);
      if (result.data.success) {
        setImages([...images, ...result.data.images]);
      }
    } catch (error) {
      console.log('==> Fetch Images Error', error);
    }
  };
  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <ImageContext.Provider value={{images, uploadImage, fetchImage}}>
      {children}
    </ImageContext.Provider>
  );
};
