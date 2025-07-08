import React, { createContext, useContext } from 'react';
import { NavigateParams } from './types';
import { useNavigate } from "react-router-dom";

const NavigatorContext = createContext<{
    navigate: (params: NavigateParams) => void;
}>({
    navigate: () => {},
});

export const NavigatorProvider = ({ 
    children, 
}: { 
    children: React.ReactNode;
}) => {
    const routerNavigate = useNavigate();
    
    const navigateFunction = (params: NavigateParams) => {
        if (params.path) {
            routerNavigate(params.path);
        }
    };
    
    return (
        <NavigatorContext.Provider value={{ navigate: navigateFunction }}>
            {children}
        </NavigatorContext.Provider>
    );
};

export const useNavigator = () => {
    return useContext(NavigatorContext);
}; 