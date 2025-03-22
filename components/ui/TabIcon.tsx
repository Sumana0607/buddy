import React from "react";
import { StyleProp, TextStyle, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors"; // Assuming you have a Colors file for theming

interface TabIconProps {
    name: keyof typeof MaterialCommunityIcons.glyphMap; // Ensures only valid icon names
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
}

const TabIcon: React.FC<TabIconProps> = ({ name, size = 24, color, style }) => {
    const colorScheme = useColorScheme();
    const defaultColor = Colors[colorScheme ?? "light"].primary;

    return (
        <MaterialCommunityIcons
            name={name}
            size={size}
            color={color ?? defaultColor}
            style={style}
        />
    );
};

export default TabIcon;
