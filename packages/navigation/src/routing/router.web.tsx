import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouteParam } from "./types";

export const buildRouter = (routeParam: RouteParam, path: string = '') => {
    return () => (
        <Routes>
            {buildWebRoutes(routeParam, path)}
        </Routes>
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