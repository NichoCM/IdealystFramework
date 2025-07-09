import React from 'react';
import { buildRouter } from "../routing";
import { AvatarExamples, BadgeExamples, ButtonExamples, CardExamples, CheckboxExamples, DividerExamples, InputExamples, TextExamples, ViewExamples } from "../../../components/src/examples";
import { Screen, Text, View, Button } from "../../../components/src";
import { UnistylesRuntime } from 'react-native-unistyles';

const HomeDrawerScreen = () => {
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
                    Use the drawer menu to explore different components
                </Text>
            </View>
        </Screen>
    );
};

const AvatarDrawerScreen = () => (
    <Screen>
        <AvatarExamples />
    </Screen>
);

const BadgeDrawerScreen = () => (
    <Screen>
        <BadgeExamples />
    </Screen>
);

const ButtonDrawerScreen = () => (
    <Screen>
        <ButtonExamples />
    </Screen>
);

const CardDrawerScreen = () => (
    <Screen>
        <CardExamples />
    </Screen>
);

const CheckboxDrawerScreen = () => (
    <Screen>
        <CheckboxExamples />
    </Screen>
);

const DividerDrawerScreen = () => (
    <Screen>
        <DividerExamples />
    </Screen>
);

const InputDrawerScreen = () => (
    <Screen>
        <InputExamples />
    </Screen>
);

const TextDrawerScreen = () => (
    <Screen>
        <TextExamples />
    </Screen>
);

const ViewDrawerScreen = () => (
    <Screen>   
        <ViewExamples />
    </Screen>
);

const DrawerRouter = buildRouter({
    path: "/",
    component: HomeDrawerScreen,
    layout: {
        type: "drawer",
    },
    routes: [
        { path: "avatar", component: AvatarDrawerScreen },
        { path: "badge", component: BadgeDrawerScreen },
        { path: "button", component: ButtonDrawerScreen },
        { path: "card", component: CardDrawerScreen },
        { path: "checkbox", component: CheckboxDrawerScreen },
        { path: "divider", component: DividerDrawerScreen },
        { path: "input", component: InputDrawerScreen },
        { path: "text", component: TextDrawerScreen },
        { path: "view", component: ViewDrawerScreen },
    ],
});

export default DrawerRouter; 