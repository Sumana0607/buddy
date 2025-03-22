import { dvw } from "@/constants/Dimension";
import { Fonts } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 150,
        height: 150,
    },
    sloganContainer: {
        width: dvw * 0.5,
        position: "absolute",
        bottom: 20,
        gap: 20,
    },
    sloganText: {
        textAlign: "center",
        fontSize: 14,
        width: "100%",
        fontFamily: Fonts.PoppinsRegular,
    },
});

export default SplashStyle;
