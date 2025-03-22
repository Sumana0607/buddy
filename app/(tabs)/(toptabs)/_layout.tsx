import { useColorScheme } from "react-native";
import { withLayoutContext } from "expo-router";

import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import { dvw } from "@/constants/Dimension";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationEventMap,
    MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);

export default function TopTabLayout() {
    const colorScheme = useColorScheme();
    const themeColor = Colors[colorScheme ?? "light"];
    return (
        <MaterialTopTabs
            screenOptions={{
                tabBarActiveTintColor: themeColor.primaryVariant,
                tabBarLabelStyle: {
                    fontFamily: Fonts.PoppinsBold,
                    textTransform: "capitalize",
                    fontSize: dvw * 0.0365,
                },
                tabBarInactiveTintColor:
                    colorScheme === "light" ? "#999" : "#aaa",
                tabBarIndicatorStyle: {
                    backgroundColor: themeColor.primaryVariant,
                    height: 3,
                },
                tabBarStyle: { backgroundColor: themeColor.surface },
                // tabBarLabel:({focused})=>{focused?""}
            }}
        >
            <MaterialTopTabs.Screen
                name="index"
                options={{ title: "Category" }}
            />
            <MaterialTopTabs.Screen name="liked" options={{ title: "Liked" }} />
            <MaterialTopTabs.Screen
                name="upload"
                options={{ title: "Upload" }}
            />
            <MaterialTopTabs.Screen
                name="request"
                options={{ title: "Request" }}
            />
        </MaterialTopTabs>
    );
}
