// path-to-your-provider/AppContext.tsx

import { createContext, ReactNode, useState } from 'react';

interface AppContextProps {
  children: ReactNode;
}

interface YourContext {
  yourState: string; // Replace with your actual state type
  setYourState: React.Dispatch<React.SetStateAction<string>>; // Replace with your actual state type
}

const AppContext = createContext({} as YourContext);

const AppContextProvider = ({ children }: AppContextProps) => {
  const [yourState, setYourState] = useState<string>(''); // Replace with your actual initial value

  // Your provider logic here

  return (
    <AppContext.Provider value={{ yourState, setYourState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
