import React, { createContext, useContext } from 'react';
import { NavigateParams } from './types';

const NavigatorContext = createContext<{
    navigate: (params: NavigateParams) => void;
}>({
    navigate: () => {},
});

export const NavigatorProvider = ({ children }: { children: React.ReactNode }) => {

    const navigate = (params: NavigateParams) => {
        console.log('navigate', params);
    };

    return (
        <NavigatorContext.Provider value={{ navigate }}>
            {children}
        </NavigatorContext.Provider>
    )
};

export const useNavigator = () => {
  return useContext(NavigatorContext);
};