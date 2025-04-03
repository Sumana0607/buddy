import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchScreen from "@/screens/SearchScreen";
import { GlobalStyle } from "@/styles/GlobalStyle";
import ThemeText from "@/components/global/TheamText";
import { Stack } from "expo-router";

const Search = () => {
    return (
        <View style={[GlobalStyle.container]}>
            <ThemeText>Search Screen</ThemeText>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    
});
