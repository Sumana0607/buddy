import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import ThemeText from "@/components/global/TheamText";

export default function CategoryScreen() {
    return (
        <View style={[GlobalStyle.container]}>
            <ThemeText>DiaryScreen</ThemeText>
        </View>
    );
}

const styles = StyleSheet.create({});
