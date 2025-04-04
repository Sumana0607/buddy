import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import SearchScreen from "@/screens/SearchScreen";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Colors } from "@/constants/Colors";
import ThemeText from "@/components/global/TheamText";
import { Stack } from "expo-router";
  
 const colorScheme = useColorScheme();
  const themeColor = Colors[colorScheme ?? "light"];
const Search = () => {
    return (
        <View style={[GlobalStyle.container]}>
            <ThemeText>Search Screen</ThemeText>
            <SearchScreen/>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    
});
