import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import ThemeText from "@/components/global/TheamText";
import { Colors } from "@/constants/Colors";
import { dvw } from "@/constants/Dimension";

const Categories = () => {
    const colorScheme = useColorScheme();
    const themeColor = Colors[colorScheme ?? "light"];
    return (
        <View
            style={[
                GlobalStyle.container,
                { backgroundColor: themeColor.background },
            ]}
        >
            <ThemeText>Categories </ThemeText>
        </View>
    );
};

export default Categories;
