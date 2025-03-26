import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Colors } from "@/constants/Colors";
import FileUpload from "@/components/ui/FileUpload";

const Upload = () => {
    const colorScheme = useColorScheme();
    return (
        <View
            style={[
                GlobalStyle.container,
                { backgroundColor: Colors[colorScheme ?? "light"].background },
            ]}
        >
            <FileUpload />
        </View>
    );
};

export default Upload;
