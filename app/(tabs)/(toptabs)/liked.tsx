import { View, Text, useColorScheme } from "react-native";
import React from "react";
import DontHaveAnyLikedBooks from "@/components/likedPage/dontHaveAnyLikedBook";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Colors } from "@/constants/Colors";

const LikedBooks = () => {
    const colorScheme = useColorScheme();
    const themeColor = Colors[colorScheme ?? "light"];

    const likedBooks: any = [];
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
                <View>
                    <Text>LikedBooks</Text>
                </View>
            )}
        </View>
    );
};

export default LikedBooks;
