import React from 'react';
import { AvatarExamples, BadgeExamples, ButtonExamples, CardExamples, CheckboxExamples, DividerExamples, InputExamples, TextExamples, ViewExamples } from "../../../components/src/examples";
import { Screen, Text, View, Button } from "../../../components/src";
import { UnistylesRuntime } from 'react-native-unistyles';
import { RouteParam } from '../routing';

const HomeTabScreen = () => {
    const toggleTheme = () => {
        const currentTheme = UnistylesRuntime.themeName;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        UnistylesRuntime.setTheme(newTheme);
        console.log('Theme toggled to:', newTheme);
    };

    return (
        <Screen>
            <View>
                <Button variant="outlined" onPress={toggleTheme}>
                    Toggle Theme (Current: {UnistylesRuntime.themeName})
                </Button>
                <Text size="large" weight="bold">
                    Welcome to the Component Library
                </Text>
                <Text size="medium">
                    Use the tabs above to explore different components
                </Text>
            </View>
        </Screen>
    );
};

const AvatarTabScreen = () => (
    <Screen>
        <AvatarExamples />
    </Screen>
);

const BadgeTabScreen = () => (
    <Screen>
        <BadgeExamples />
    </Screen>
);

const ButtonTabScreen = () => (
    <Screen>
        <ButtonExamples />
    </Screen>
);

const CardTabScreen = () => (
    <Screen>
        <CardExamples />
    </Screen>
);

const CheckboxTabScreen = () => (
    <Screen>
        <CheckboxExamples />
    </Screen>
);

const DividerTabScreen = () => (
    <Screen>
        <DividerExamples />
    </Screen>
);

const InputTabScreen = () => (
    <Screen>
        <InputExamples />
    </Screen>
);

const TextTabScreen = () => (
    <Screen>
        <TextExamples />
    </Screen>
);

const ViewTabScreen = () => (
    <Screen>
        <ViewExamples />
    </Screen>
);

const TabRouter: RouteParam = {
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
}

export default TabRouter; 