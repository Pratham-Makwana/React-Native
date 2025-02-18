import axios from 'axios';
import {createContext, ReactNode, useContext, useState} from 'react';
import {API_URL, AuthContext} from './AuthContext';

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
  fetchRecipes: () => Promise<void>;
  fetchSingleRecipe: (id: string) => Promise<Recipe>;
  deleteRecipe: (id: string) => Promise<void>;
  
}

export const RecipeContext = createContext<RecipeContextData>(
  {} as RecipeContextData,
);

export const RecipeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const {token} = useContext(AuthContext);

  // ============== Fetch All Recipe ==============
  const fetchRecipes = async () => {
    try {
      const result = await axios.get(`${API_URL}/api/recipe/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRecipes(result.data.allRecipeData);
    } catch (e) {
      console.log(e);
    }
  };


  // =============== Delete Recipe ================
  const deleteRecipe = async (id: string) => {
    try {
     await axios.delete(`${API_URL}/api/recipe/delete/${id}`, {
      headers : {
        Authorization : `Bearer ${token}`
      }
     });
    } catch (e) {
      console.log('==> deleteRecipe Error', e);
    }
  };

  // ============== Fetch Single Recipe  ==============
  const fetchSingleRecipe = async (id: string): Promise<Recipe> => {
    // console.log('==> id ', id);

    try {
      const result = await axios.get(`${API_URL}/api/recipe/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log('==> result context', result.data);

      return result.data.singleRecipe;
    } catch (e) {
      console.log('==> FetchSingleRecipe Error', e);
      throw e;
    }
  };

  // ==============  Create Recipe ==============
  const createRecipe = async (
    recipe: Omit<Recipe, '_id' | 'cratedBy' | 'createdAt'>,
  ) => {
    // console.log('==> Recipe From context', recipe);
    try {
      const result = await axios.post(`${API_URL}/api/recipe/create`, recipe, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log('==>Newly Recipe', result?.data);
      if (result?.data?.success)
        setRecipes([...recipes, result.data.newRecipeData]);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <RecipeContext.Provider
      value={{recipes, createRecipe, fetchRecipes, fetchSingleRecipe, deleteRecipe}}>
      {children}
    </RecipeContext.Provider>
  );
};
