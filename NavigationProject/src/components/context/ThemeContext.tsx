import {createContext, ReactNode, useContext, useState} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook for ThemeContext
export const useTheme = () => {
  // to user this line in every component we use this custom Hook
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useContext must be used with in the ThemeProvider');
  }

  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(preTheme => (preTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

