import React, { useState } from 'react';
import { buildRouter } from "../routing";
import { AvatarExamples, BadgeExamples, ButtonExamples, CardExamples, CheckboxExamples, DividerExamples, InputExamples, TextExamples, ViewExamples } from "../../../components/src/examples";
import { Button, Text, View } from "../../../components/src";
import { UnistylesRuntime, StyleSheet } from 'react-native-unistyles';

const ThemeToggleSection = () => {
    const [currentTheme, setCurrentTheme] = useState(UnistylesRuntime.themeName || 'light');

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        UnistylesRuntime.setTheme(newTheme);
        setCurrentTheme(newTheme);
    };

    return (
        <View style={styles.themeSection}>
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
    );
};

const HomeTabScreen = () => {
    return (
        <View style={styles.container}>
            <ThemeToggleSection />
            <View style={styles.content}>
                <Text size="large" weight="bold">
                    Welcome to the Component Library
                </Text>
                <Text size="medium">
                    Use the tabs above to explore different components
                </Text>
            </View>
        </View>
    );
};

const AvatarTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <AvatarExamples />
    </View>
);

const BadgeTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <BadgeExamples />
    </View>
);

const ButtonTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <ButtonExamples />
    </View>
);

const CardTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <CardExamples />
    </View>
);

const CheckboxTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <CheckboxExamples />
    </View>
);

const DividerTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <DividerExamples />
    </View>
);

const InputTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <InputExamples />
    </View>
);

const TextTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <TextExamples />
    </View>
);

const ViewTabScreen = () => (
    <View style={styles.container}>
        <ThemeToggleSection />
        <ViewExamples />
    </View>
);

const TabRouter = buildRouter({
    path: "/",
    component: HomeTabScreen,
    layout: {
        type: "tab",
    },
    routes: [
        { path: "avatar", component: AvatarTabScreen },
        { path: "badge", component: BadgeTabScreen },
        { path: "button", component: ButtonTabScreen },
        { path: "card", component: CardTabScreen },
        { path: "checkbox", component: CheckboxTabScreen },
        { path: "divider", component: DividerTabScreen },
        { path: "input", component: InputTabScreen },
        { path: "text", component: TextTabScreen },
        { path: "view", component: ViewTabScreen },
    ],
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    themeSection: {
        marginBottom: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
});

export default TabRouter; 