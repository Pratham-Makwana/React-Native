import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, ReactNode, useEffect, useState} from 'react';

// const API_URL = 'http://10.0.2.2:5000';
export const API_URL = 'http://192.168.200.98:5000';

interface AuthContextData {
  token: string | null;
  isLoading: boolean;
  userId: string | null;
  signUp: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  // checkAuth: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    try {
      const getStoredToken = await AsyncStorage.getItem('token');
      const getStoreUserId = await AsyncStorage.getItem('userId');
      if (getStoredToken && getStoreUserId) {
        setToken(getStoredToken);
        setUserId(getStoreUserId);
        setIsAuthenticated(true);
        return true;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const signUp = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await axios.post(`${API_URL}/api/auth/register`, {
        email,
        password,
      });

      // if (result?.data?.success) return true;
      // else return false;
      return result?.data?.success ?? false;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log('signUp Error Details', error?.response?.data);
      }
      return false;
    }
  };

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      const {success, token, userId} = result?.data;
      if (success && token && userId) {
        // store token in async storage
        await AsyncStorage.setItem('token', token);
        setToken(token);
        await AsyncStorage.setItem('userId', userId);
        setUserId(userId);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log('signIn Error Details', error?.response?.data);
      }
      return false;
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      setIsAuthenticated(false);
      setUserId(null);
      setToken(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        isLoading,
        isAuthenticated,
        // checkAuth,
        signIn,
        signOut,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
