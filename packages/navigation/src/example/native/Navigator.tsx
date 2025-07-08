import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LayoutParam } from "../../routing/types";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

const Home = () => {
    return (
        <></>
    )
}

const test: LayoutParam = {
    type: 'stack',
    component: Home
}

