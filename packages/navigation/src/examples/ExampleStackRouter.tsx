import { buildRouter } from "../routing";
import { AvatarExamples, BadgeExamples, ButtonExamples, CardExamples, CheckboxExamples, DividerExamples, InputExamples, TextExamples, ViewExamples } from "@idealyst/components/src/examples";
import { Button, Text, View } from "@idealyst/components";
import { useNavigator } from "../context";

const HomeScreen = () => {

    const navigator = useNavigator();

    return (
        <View style={{ gap: 10}}>
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
    )
};

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