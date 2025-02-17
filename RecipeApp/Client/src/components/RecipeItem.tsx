import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Recipe} from '../context/RecipeContext';

interface RecipeItemProps {
  recipe: Recipe;
  onPressRecipeItem: () => void;
  currentUserId: string | null;
  onRecipeItemDelete: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  recipe,
  onPressRecipeItem,
  currentUserId,
  onRecipeItemDelete,
}) => {
  return (
    <TouchableOpacity onPress={onPressRecipeItem} style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{recipe?.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {recipe?.description}
        </Text>
        <Text style={styles.difficulty}>{recipe?.difficulty}</Text>

        {currentUserId && recipe.cratedBy === currentUserId && (
          <TouchableOpacity onPress={onRecipeItemDelete} style={styles.btnDelete}>
            <Text style={styles.btnDeleteTxt}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
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
  btnDelete: {
    position: 'absolute',
    top: -8,
    right: 5,
    backgroundColor: '#8c0707',
    padding: 10,
    borderRadius: 10,
  },
  btnDeleteTxt: {
    fontSize: 14,
    color: '#fff',
  },
});
