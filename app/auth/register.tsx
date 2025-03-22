import { View, Text, useColorScheme, Image, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Colors } from "@/constants/Colors";
import Visuals from "@/components/ui/Visuals";
import { dvh, dvw } from "@/constants/Dimension";
import { Fonts } from "@/constants/Fonts";
import ThemeText from "@/components/global/TheamText";
import { Link } from "expo-router";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
    const colorScheme = useColorScheme();
    const themeColor = Colors[colorScheme ?? "light"];

    return (
        <View
            style={[
                GlobalStyle.container,
                { backgroundColor: themeColor.background },
            ]}
        >
            <Visuals />
            <View
                style={{
                    position: "absolute",
                    top: dvh * 0.3,
                    width: dvw,
                    height: "100%",
                }}
            >
                <ThemeText
                    font={Fonts.Jua}
                    size={dvw * 0.1}
                    style={{
                        letterSpacing: -2,
                    }}
                >
                    Register
                </ThemeText>

                <RegisterForm />

                {/* Separator */}
                <View style={styles.seperator}>
                    <View
                        style={{
                            borderBottomColor:
                                Colors[colorScheme ?? "light"].textPrimary,
                            borderBottomWidth: 0.8,
                            flex: 1,
                        }}
                    />
                    <ThemeText font={Fonts.Jua} size={14}>
                        OR
                    </ThemeText>
                    <View
                        style={{
                            borderBottomColor:
                                Colors[colorScheme ?? "light"].textPrimary,
                            borderBottomWidth: 0.8,
                            flex: 1,
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 13,
                        fontFamily: Fonts.PoppinsLight,
                        color: themeColor.textPrimary,
                        textAlign: "center",
                    }}
                >
                    Already have an Account?{" "}
                    <Link
                        href={"/auth/login"}
                        style={{
                            color: Colors[colorScheme ?? "light"].primary,
                        }}
                        asChild
                    >
                        <Text
                            style={{
                                color: Colors[colorScheme ?? "light"]
                                    .primaryVariant,
                                fontSize: 16,
                                fontFamily: Fonts.Jua,
                                textDecorationStyle: "solid",
                                textDecorationLine: "underline",
                                textDecorationColor:
                                    Colors[colorScheme ?? "light"]
                                        .primaryVariant,
                            }}
                        >
                            Login
                        </Text>
                    </Link>
                </Text>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    seperator: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        gap: 10,
        marginBottom: 10,
    },
});
