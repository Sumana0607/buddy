import {
    FlatList,
    StyleSheet,
    Pressable,
    View,
    useColorScheme,
} from "react-native";
import React from "react";
import ThemeText from "../global/TheamText";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

const categories = ["Computer", "History", "Geography", "English", "Sanskrit"];

interface CategoriesOptionProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const CategoriesOption: React.FC<CategoriesOptionProps> = ({
    activeCategory,
    setActiveCategory,
}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"];
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    const isActive = activeCategory === item;
                    return (
                        <Pressable
                            style={[
                                styles.button,
                                isActive && {
                                    backgroundColor: theme.primaryVariant,
                                },
                            ]}
                            onPress={() => setActiveCategory(item)}
                        >
                            <ThemeText
                                color={isActive ? theme.background : theme.gray}
                                font={
                                    isActive
                                        ? Fonts.PoppinsMedium
                                        : Fonts.PoppinsRegular
                                }
                                size={15}
                            >
                                {item}
                            </ThemeText>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
};

export default CategoriesOption;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 1,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginRight: 5,
    },
});
