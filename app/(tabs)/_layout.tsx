import React from "react";
import { router, Tabs } from "expo-router";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/Colors";
import TabIcon from "@/components/ui/TabIcon";

const TabLayout = () => {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? "light"];

    // Define tab screen data to avoid redundancy
    const tabScreens = [
        {
            name: "(toptabs)",
            label: "Books",
            focusedIcon: "book-open-page-variant",
            unfocusedIcon: "book-open-page-variant-outline",
        },
        {
            name: "search",
            label: "Search",
            focusedIcon: "magnify-expand",
            unfocusedIcon: "magnify",
        },
        {
            name: "diary",
            label: "Diary",
            focusedIcon: "notebook-edit",
            unfocusedIcon: "notebook-edit-outline",
        },
    ] as const;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: themeColors.primaryVariant,
                headerShadowVisible: false,
            }}
            initialRouteName="(toptabs)"
        >
            {tabScreens.map(({ name, label, focusedIcon, unfocusedIcon }) => (
                <Tabs.Screen
                    key={name}
                    name={name}
                    options={{
                        tabBarIcon: ({ color, focused, size }) => (
                            <TabIcon
                                name={focused ? focusedIcon : unfocusedIcon}
                                color={color}
                                size={size}
                            />
                        ),
                        tabBarLabel: label,
                        headerLeft: () => (
                            <View style={{ paddingLeft: 20 }}>
                                <Image
                                    source={require("@/assets/images/logo.png")}
                                    style={{ height: 50, width: 50 }}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <Pressable
                                style={{ paddingRight: 20 }}
                                onPress={() => router.push("/auth/login")}
                            >
                                <Image
                                    source={require("@/assets/images/favicon.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: themeColors.accent,
                                        borderRadius: 50,
                                    }}
                                />
                            </Pressable>
                        ),
                        headerTitle: "",
                        headerStyle: {
                            backgroundColor: themeColors.surface,
                            height: 100,
                        },
                        tabBarStyle: {
                            backgroundColor: themeColors.surface,
                        },
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabLayout;
