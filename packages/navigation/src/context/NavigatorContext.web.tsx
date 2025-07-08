import React, { createContext, useContext } from 'react';
import { NavigateParams } from './types';

const NavigatorContext = createContext<{
    navigate: (params: NavigateParams) => void;
}>({
    navigate: () => {},
});

export const NavigatorProvider = ({ 
    children, 
    navigate 
}: { 
    children: React.ReactNode;
    navigate?: (params: NavigateParams) => void;
}) => {
    const navigateFunction = navigate || (() => {});
    
    return (
        <NavigatorContext.Provider value={{ navigate: navigateFunction }}>
            {children}
        </NavigatorContext.Provider>
    );
};

export const useNavigator = () => {
    return useContext(NavigatorContext);
}; 