import React from "react";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TextInputProps,
    useColorScheme,
} from "react-native";
import ThemeText from "../global/TheamText";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

interface CustomInputProps extends TextInputProps {
    label?: string;
    error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    error,
    ...props
}) => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            {label && (
                <ThemeText
                    font={Fonts.Jua}
                    style={[
                        styles.label,
                        {
                            backgroundColor:
                                Colors[colorScheme ?? "light"].surface,
                        },
                    ]}
                >
                    {label}
                </ThemeText>
            )}
            <TextInput
                style={[
                    {
                        backgroundColor: Colors[colorScheme ?? "light"].surface,
                        borderColor:
                            Colors[colorScheme ?? "light"].primaryVariant,
                        color: Colors[colorScheme ?? "light"].textPrimary,
                    },
                    styles.input,
                    error && {
                        borderColor: Colors[colorScheme ?? "light"].error,
                        color: Colors[colorScheme ?? "light"].error,
                    },
                ]}
                placeholderTextColor={colorScheme === "light" ? "#999" : "#888"}
                {...props}
            />
            {error && (
                <Text
                    style={[
                        styles.errorText,
                        {
                            backgroundColor:
                                Colors[colorScheme ?? "light"].surface,
                            color: Colors[colorScheme ?? "light"].error,
                        },
                    ]}
                >
                    {error}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },
    label: {
        position: "absolute",
        left: 10,
        top: -10,
        fontSize: 16,
        borderRadius: 20,
        paddingHorizontal: 8,
        zIndex: 1,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    errorText: {
        fontSize: 12,
        marginTop: 4,
        position: "absolute",
        right: 10,
        bottom: -6,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
});

export default CustomInput;
