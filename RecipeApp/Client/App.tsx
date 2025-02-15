import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import {AuthProvider} from './src/context/AuthContext';
import {RecipeContext, RecipeProvider} from './src/context/RecipeContext';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <RecipeProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
