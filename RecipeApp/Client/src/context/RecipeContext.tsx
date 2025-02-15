import {createContext, ReactNode, useState} from 'react';

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cratedBy: string;
  createdAt: string;
}

interface RecipeContextData {
  recipes: Recipe[];
  createRecipe: (
    recipe: Omit<Recipe, '_id' | 'cratedBy' | 'createdAt'>,
  ) => Promise<void>;
}

export const RecipeContext = createContext<RecipeContextData>(
  {} as RecipeContextData,
);


export const RecipeProvider : React.FC<{children : ReactNode}> = ({children}) => {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const createRecipe = async () => {}

    return <RecipeContext.Provider value={{recipes, createRecipe}}>{children}</RecipeContext.Provider>
}