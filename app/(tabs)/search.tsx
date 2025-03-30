import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchScreen from "@/screens/SearchScreen";
import { GlobalStyle } from "@/styles/GlobalStyle";

const Search = () => {
    return (
        <View style={[GlobalStyle.container]}>
            <SearchScreen />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    
});
