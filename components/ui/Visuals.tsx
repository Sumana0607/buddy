import React, { useEffect } from "react";
import { useColorScheme, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
    withDelay,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);

export default function Visuals() {
    const colorScheme = useColorScheme();

    const position1 = useSharedValue(-200); // Start off-screen
    const position2 = useSharedValue(-200);
    const position3 = useSharedValue(-200);

    useEffect(() => {
        // Animate the positions with a delay
        position1.value = withTiming(28.5, { duration: 500 }); // Final cy value for the first ellipse
        position2.value = withDelay(200, withTiming(-15.5, { duration: 500 })); // Second ellipse
        position3.value = withDelay(400, withTiming(137.5, { duration: 500 })); // Third ellipse
    }, []);

    const animatedProps1 = useAnimatedProps(() => ({
        cy: position1.value,
    }));

    const animatedProps2 = useAnimatedProps(() => ({
        cy: position2.value,
    }));

    const animatedProps3 = useAnimatedProps(() => ({
        cy: position3.value,
    }));

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: Colors[colorScheme ?? "light"].background,
            }}
        >
            <Svg width="412" height="335" viewBox="0 0 412 335">
                <AnimatedEllipse
                    cx="317"
                    cy="28.5" // Initial position is overwritten by animatedProps
                    rx="228"
                    ry="197.5"
                    fill={Colors[colorScheme ?? "light"].primaryVariant}
                    animatedProps={animatedProps1}
                />
                <AnimatedEllipse
                    cx="184"
                    cy="-15.5"
                    rx="228"
                    ry="197.5"
                    fill={Colors[colorScheme ?? "light"].primary}
                    animatedProps={animatedProps2}
                />
                <AnimatedEllipse
                    cx="60"
                    cy="137.5"
                    rx="228"
                    ry="197.5"
                    fill={
                        colorScheme === "dark"
                            ? Colors.light.textSecondary
                            : Colors.dark.textSecondary
                    }
                    animatedProps={animatedProps3}
                />
            </Svg>
        </View>
    );
}
