import React, { createContext, useContext } from 'react';
import { NavigateParams } from './types';
import { useNavigation, useNavigationState } from '@react-navigation/native';   

const NavigatorContext = createContext<{
    navigate: (params: NavigateParams) => void;
    debugPrintPaths: () => void;
}>({
    navigate: () => {},
    debugPrintPaths: () => {},
});

export const NavigatorProvider = ({ children }: { children: React.ReactNode }) => {

    const navigation = useNavigation();
        
    const navigate = (params: NavigateParams) => {
        console.log('navigate', params);
        navigation.navigate(params.path);
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