import { View, useColorScheme, FlatList } from "react-native";
import React, { useState } from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import ThemeText from "@/components/global/TheamText";
import { Colors } from "@/constants/Colors";
import CategoriesOption from "@/components/ui/CategoriesOption";

// Mock data for books in each category
const booksData: Record<string, string[]> = {
    Computer: [
        "Computer Science Basics",
        "AI & Machine Learning",
        "Data Structures",
    ],
    History: ["World War II", "Ancient Civilizations", "Medieval Kings"],
    Geography: ["Earth & Space", "Oceans & Continents", "Climate Change"],
    English: ["Shakespeare's Works", "Modern Poetry", "Grammar & Writing"],
    Sanskrit: ["Vedic Literature", "Sanskrit Grammar", "Ancient Scriptures"],
};

export default function Books() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"];

    const [activeCategory, setActiveCategory] = useState("Computer");

    return (
        <View
            style={[
                GlobalStyle.container,
                { backgroundColor: theme.background },
            ]}
        >
            {/* Categories Tab */}
            <CategoriesOption
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* Book List for Selected Category */}
            <View>
                <FlatList
                    data={booksData[activeCategory]} // Show books of active category
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <ThemeText style={{ padding: 10 }}>{item}</ThemeText>
                    )}
                />
            </View>
        </View>
    );
}
