import React, { useState } from 'react';
import { buildRouter } from "../routing";
import { AvatarExamples, BadgeExamples, ButtonExamples, CardExamples, CheckboxExamples, DividerExamples, InputExamples, ScreenExamples, TextExamples, ViewExamples } from "../../../components/src/examples";
import { Button, Divider, Screen, Text, View } from "../../../components/src";
import { useNavigator } from "../context";
import { UnistylesRuntime, StyleSheet } from 'react-native-unistyles';
import { GeneralLayout } from '../layouts/GeneralLayout';

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
                    <Text>Avatar</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/badge",
                            vars: {},
                        });
                    }}>
                    <Text>Badge</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/button",
                            vars: {},
                        });
                    }}>
                    <Text>Button</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/card",
                            vars: {},
                        });
                    }}>
                    <Text>Card</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/checkbox",
                            vars: {},
                        });
                    }}>
                    <Text>Checkbox</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/divider",
                            vars: {},
                        });
                    }}>
                    <Text>Divider</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/input",
                            vars: {},
                        });
                    }}>
                    <Text>Input</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/text",
                            vars: {},
                        });
                    }}>
                    <Text>Text</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/view",
                            vars: {},
                        });
                    }}>
                    <Text>View</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigator.navigate({
                            path: "/screen",
                            vars: {},
                        });
                    }}>
                    <Text>Screen</Text>
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

const StackRouter = buildRouter({
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
    ],
});

export default StackRouter;