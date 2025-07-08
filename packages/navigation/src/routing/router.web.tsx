import React from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { RouteParam } from "./types";
import { NavigatorProvider } from "../context/NavigatorContext.web";
import { NavigateParams } from "../context/types";

export const buildRouter = (routeParam: RouteParam, path: string = '') => {
    return () => (
        <BrowserRouter>
            <NavigatorRouterProvider>
                <Routes>
                    {buildWebRoutes(routeParam, path)}
                </Routes>
            </NavigatorRouterProvider>
        </BrowserRouter>
    );
};

const NavigatorRouterProvider = ({ children }: { children: React.ReactNode }) => {
    const reactRouterNavigate = useNavigate();
    
    const navigate = (params: NavigateParams) => {
        // Replace variables in the path
        let finalPath = params.path;
        if (params.vars) {
            Object.entries(params.vars).forEach(([key, value]: [string, string]) => {
                finalPath = finalPath.replace(`:${key}`, value);
            });
        }
        
        // Use React Router's navigate
        reactRouterNavigate(finalPath);
    };

    return (
        <NavigatorProvider navigate={navigate}>
            {children}
        </NavigatorProvider>
    );
};

/**
 * Create React Router routes from RouteParam configuration
 * @param routeParam 
 * @param parentPath 
 * @returns 
 */
const buildWebRoutes = (routeParam: RouteParam, parentPath: string = ''): React.ReactElement[] => {
    const routes: React.ReactElement[] = [];
    const currentPath = routeParam.path ? `${parentPath}${routeParam.path}` : parentPath;
    
    // Handle layout wrapping
    const LayoutComponent = routeParam.layout?.component;
    const RouteComponent = routeParam.component;
    
    // Create the main route
    const element = LayoutComponent ? (
        <LayoutComponent>
            <RouteComponent />
        </LayoutComponent>
    ) : (
        <RouteComponent />
    );
    
    routes.push(
        <Route 
            key={currentPath || 'root'} 
            path={currentPath || '/'} 
            element={element} 
        />
    );
    
    // Handle nested routes
    if (routeParam.routes) {
        routeParam.routes.forEach(nestedRoute => {
            routes.push(...buildWebRoutes(nestedRoute, currentPath));
        });
    }
    
    return routes;
};

/**
 * Alternative: Build nested routes with Outlet pattern
 */
export const buildNestedRouter = (routeParam: RouteParam, path: string = '') => {
    return () => (
        <BrowserRouter>
            <Routes>
                {buildNestedRoutes(routeParam, path)}
            </Routes>
        </BrowserRouter>
    );
};

const buildNestedRoutes = (routeParam: RouteParam, parentPath: string = ''): React.ReactElement => {
    const currentPath = routeParam.path ? `${parentPath}${routeParam.path}` : parentPath;
    const RouteComponent = routeParam.component;
    
    return (
        <Route 
            key={currentPath || 'root'}
            path={currentPath || '/'}
            element={<RouteComponent />}
        >
            {routeParam.routes?.map(nestedRoute => 
                buildNestedRoutes(nestedRoute, currentPath)
            )}
        </Route>
    );
}; 