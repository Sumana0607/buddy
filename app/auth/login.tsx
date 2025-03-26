import {
    View,
    Text,
    useColorScheme,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Colors } from "@/constants/Colors";
import Visuals from "@/components/ui/Visuals";
import { dvh, dvw } from "@/constants/Dimension";
import { Fonts } from "@/constants/Fonts";
import ThemeText from "@/components/global/TheamText";
import LoginForm from "@/components/LoginForm";
import { Link } from "expo-router";

const Login = () => {
    const colorScheme = useColorScheme();
    const themeColor = Colors[colorScheme ?? "light"];
    return (
        // <KeyboardAvoidingView
        //     style={{ flex: 1 }}
        //     behavior={Platform.OS === "ios" ? "padding" : "height"}
        //     keyboardVerticalOffset={200}
        // >
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
                    // backgroundColor: "#f9fa0a",
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
                    Login
                </ThemeText>

                {/* login form  */}

                <LoginForm />

                {/* seperator  */}
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
                    Don't have an Account?{" "}
                    <Link
                        href={"/auth/register"}
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
                            Register
                        </Text>
                    </Link>
                </Text>
            </View>
        </View>
        // </KeyboardAvoidingView>
    );
};

export default Login;
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
