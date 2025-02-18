import React, {createContext, ReactNode, useState} from 'react';

type ImageContextType = {
  imageUrl: string | null;
  uploadImage: (url: string | undefined) => Promise<void>;
};

export const ImageContext = createContext<ImageContextType>(
  {} as ImageContextType,
);

export const ImageProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadImage = async (url: string | undefined) => {
    console.log("==> image context", url);
    
  };
  return (
    <ImageContext.Provider value={{imageUrl, uploadImage}}>
      {children}
    </ImageContext.Provider>
  );
};
