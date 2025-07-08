import { Button, Text, View } from "@idealyst/components";
import { StackActions, useNavigation } from "@react-navigation/native";

import { buildRouter } from "@idealyst/navigation";

const TestScreen1 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>TestScreen1</Text>
            <Button onPress={() => navigation.navigate('TestScreen1TestScreen2')}>
                Go to TestScreen2
            </Button>
        </View>
    )
}

const TestScreen2 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>TestScreen2</Text>
            <Button onPress={() => navigation.navigate('TestScreen1TestScreen3')}>
                Go to TestScreen3
            </Button>
        </View>
    )
}

const TestScreen3 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>TestScreen3</Text>
            <Button onPress={() => navigation.dispatch(StackActions.popToTop())}>
                Go to TestScreen1
            </Button>
        </View>
    )
}

const NavigatorComponent = buildRouter({
    path: 'TestScreen1',
    component: TestScreen1,
    layout: {
        type: 'stack',
    },
    routes: [
        {
            path: 'TestScreen2',
            component: TestScreen2,
        },
        {
            path: 'TestScreen3',
            component: TestScreen3,
        }
    ]
});

export const Navigator = () => {
    return <NavigatorComponent />;
};