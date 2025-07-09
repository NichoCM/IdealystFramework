import React, { useState } from 'react';
import { buildRouter } from "../routing";
import { AvatarExamples, BadgeExamples, ButtonExamples, CardExamples, CheckboxExamples, DividerExamples, InputExamples, TextExamples, ViewExamples } from "../../../components/src/examples";
import { Button, Text, View } from "../../../components/src";
import { useNavigator } from "../context";
import { UnistylesRuntime, StyleSheet } from 'react-native-unistyles';

const HomeScreen = () => {
    const navigator = useNavigator();
    const [currentTheme, setCurrentTheme] = useState(UnistylesRuntime.themeName || 'light');

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        UnistylesRuntime.setTheme(newTheme);
        setCurrentTheme(newTheme);
    };

    return (
        <View style={styles.container}>
            {/* Theme Toggle Section */}
            <View style={styles.themeToggle}>
                <Text size="medium" weight="bold" style={styles.themeText}>
                    Current Theme: {currentTheme}
                </Text>
                <Button
                    variant="outlined"
                    intent="primary"
                    size="medium"
                    onPress={toggleTheme}
                    style={styles.toggleButton}
                >
                    {currentTheme === 'light' ? '🌙' : '☀️'} Toggle to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
            </View>

            {/* Component Navigation Buttons */}
            <View style={styles.buttonGroup}>
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
            </View>
        </View>
    )
};

const styles = StyleSheet.create((theme) => ({
    container: {
        
        padding: theme.spacing?.lg || 20,
        gap: theme.spacing?.md || 10,
        backgroundColor: theme.colors?.surface?.primary || '#ffffff',
    },
    
    themeToggle: {
        marginBottom: theme.spacing?.lg || 20,
        alignItems: 'center',
        gap: theme.spacing?.sm || 8,
    },
    
    themeText: {
        color: theme.colors?.text?.primary || '#000000',
    },
    
    toggleButton: {
        marginTop: theme.spacing?.xs || 4,
    },
    
    buttonGroup: {
        gap: theme.spacing?.sm || 10,
    },
}));

const StackRouter = buildRouter({
    path: "/",
    component: HomeScreen,
    layout: {
        type: "stack",
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
    ],
});

export default StackRouter;