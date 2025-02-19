import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {AuthProvider} from './src/context/AuthContext';
import {RecipeProvider} from './src/context/RecipeContext';
import {ImageProvider} from './src/context/ImageContext';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <RecipeProvider>
        <ImageProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </ImageProvider>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
