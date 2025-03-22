import { Text, TextProps, useColorScheme, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts"; // Import the fonts enum

interface ThemeTextProps extends TextProps {
    font?: Fonts;
    size?: number;
    color?: string;
    align?: "left" | "center" | "right";
}

const ThemeText: React.FC<ThemeTextProps> = ({
    children,
    font = Fonts.PoppinsRegular,
    size = 16,
    color,
    align = "left",
    style,
    ...rest
}) => {
    const colorScheme = useColorScheme();
    const defaultColor = Colors[colorScheme ?? "light"].textPrimary;

    return (
        <Text
            style={[
                styles.text,
                {
                    fontFamily: font,
                    fontSize: size,
                    textAlign: align,
                    color: color ?? defaultColor,
                },
                style,
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
};

export default ThemeText;

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.PoppinsRegular, // Default font
    },
});
