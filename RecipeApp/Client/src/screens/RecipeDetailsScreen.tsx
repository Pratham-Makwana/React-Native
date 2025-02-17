import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamsList} from '../navigation/RootNavigation';
import {Recipe, RecipeContext} from '../context/RecipeContext';

type RecipeDetailsScreenRouteProp = RouteProp<
  RootStackParamsList,
  'RecipeDetails'
>;

interface RecipeDetailsScreenProps {
  route: RecipeDetailsScreenRouteProp;
}

const RecipeDetailsScreen: React.FC<RecipeDetailsScreenProps> = ({route}) => {
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);
  const {recipeId} = route.params;
  const {fetchSingleRecipe} = useContext(RecipeContext);
  // console.log(recipeId);

  useEffect(() => {
    const fecthRecipe = async () => {
      const fetchedRecipe = await fetchSingleRecipe(recipeId);
      // console.log('==> fetchedRecipe', fetchedRecipe);
      fetchedRecipe && setRecipeDetails(fetchedRecipe);
    };

    fecthRecipe();
  }, [recipeId]);

  if (!recipeDetails) {
    return (
      <ActivityIndicator
        size={'large'}
        style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipeDetails?.title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {recipeDetails?.description}
      </Text>
      <Text style={styles.difficulty}>{recipeDetails?.difficulty}</Text>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 25
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
  },
  difficulty: {
    fontSize: 14,
    color: '#007afd',
    fontWeight: 'bold',
  },
});
