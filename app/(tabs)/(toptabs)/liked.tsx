import { View, Text, useColorScheme } from "react-native";
import React from "react";
import DontHaveAnyLikedBooks from "@/components/likedPage/dontHaveAnyLikedBook";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Colors } from "@/constants/Colors";
import ThemeText from "@/components/global/TheamText";
import LikedScreen from "@/screens/LikedScreen";

const LikedBooks = () => {
    const colorScheme = useColorScheme();
    const themeColor = Colors[colorScheme ?? "light"];

    const likedBooks: any = ["a"];
    return (
        <View
            style={[
                GlobalStyle.container,
                { backgroundColor: themeColor.background },
            ]}
        >
            {likedBooks.length === 0 ? (
                <DontHaveAnyLikedBooks />
            ) : (
                <LikedScreen />
            )}
        </View>
    );
};

export default LikedBooks;
