import React, { useState } from 'react';
import { AvatarExamples, BadgeExamples, ButtonExamples, CardExamples, CheckboxExamples, DividerExamples, IconExamples, InputExamples, ScreenExamples, TextExamples, ViewExamples } from "../../../components/src/examples";
import { Button, Divider, Screen, Text, View } from "../../../components/src";
import { useNavigator } from "../context";
import { UnistylesRuntime, StyleSheet } from 'react-native-unistyles';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { RouteParam } from '../routing';

const HomeScreen = () => {
    const navigator = useNavigator();
    const currentTheme = "light";

    const toggleTheme = () => {
        const currentTheme = UnistylesRuntime.themeName;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        UnistylesRuntime.setTheme(newTheme);        
    };

    return (
        <Screen>
            <View style={{ maxWidth: 800, width: '100%', gap: 10, marginHorizontal: 'auto' }}>
            {/* Theme Toggle Section */}
            <View>
                <Text size="medium" weight="bold">
                    Current Theme: {currentTheme}
                </Text>
                <Button
                    variant="outlined"
                    intent="primary"
                    size="medium"
                    onPress={toggleTheme}
                >
                    {currentTheme === 'light' ? '🌙' : '☀️'} Toggle to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
            </View>

            {/* Component Navigation Buttons */}
            <View style={{ gap: 10 }}>
                <Button
                    onPress={() => {
                    navigator.navigate({
                        path: "/avatar",
                        vars: {},
                    });
                }}>
                    Avatar
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/badge",
                            vars: {},
                        });
                    }}>
                    Badge
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/button",
                            vars: {},
                        });
                    }}>
                    Button
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/card",
                            vars: {},
                        });
                    }}>
                    Card
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/checkbox",
                            vars: {},
                        });
                    }}>
                    Checkbox
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/divider",
                            vars: {},
                        });
                    }}>
                    Divider
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/input",
                            vars: {},
                        });
                    }}>
                    Input
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/text",
                            vars: {},
                        });
                    }}>
                    Text
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/view",
                            vars: {},
                        });
                    }}>
                    View
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/screen",
                            vars: {},
                        });
                    }}>
                    Screen
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/icon",
                            vars: {},
                        });
                    }}>
                    Icon
                </Button>
            </View>
            </View>
        </Screen>
    )
};

const WrappedGeneralLayout = (props: any) => {

    const navigator = useNavigator();

    return (
        <GeneralLayout
            header={{
                content: <Text style={{ marginHorizontal: 'auto' }} color="inverse">Stack Router Demo App</Text>,
            }}
            sidebar={{
                enabled: true,
                collapsible: true,
                position: 'left',
                initiallyExpanded: false,
                content: <Button onPress={() => {
                    navigator.navigate({
                        path: "/",
                        vars: {},
                    });
                }}>Home</Button>,
            }}
            {...props}>
        </GeneralLayout>
    )
}

const StackRouter: RouteParam = {
    path: "/",
    component: HomeScreen,
    layout: {
        type: "stack",
        component: WrappedGeneralLayout,
    },
    routes: [
        { path: "avatar", component: AvatarExamples},
        { path: "badge", component: BadgeExamples},
        { path: "button", component: ButtonExamples},
        { path: "card", component: CardExamples},
        { path: "checkbox", component: CheckboxExamples},
        { path: "divider", component: DividerExamples},
        { path: "input", component: InputExamples},
        { path: "text", component: TextExamples},
        { path: "view", component: ViewExamples},
        { path: "screen", component: ScreenExamples},
        { path: "icon", component: IconExamples},
    ],
};

export default StackRouter;