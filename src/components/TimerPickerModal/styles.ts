import { StyleSheet } from "react-native";
import type { TextStyle, ViewStyle } from "react-native";

import type { CustomTimerPickerStyles } from "../TimerPicker/styles";

export interface CustomTimerPickerModalStyles extends CustomTimerPickerStyles {
    button?: TextStyle;
    buttonContainer?: ViewStyle;
    cancelButton?: TextStyle;
    confirmButton?: TextStyle;
    container?: ViewStyle;
    contentContainer?: ViewStyle;
    modalTitle?: TextStyle;
}

const DARK_MODE_BACKGROUND_COLOR = "#232323";
const DARK_MODE_TEXT_COLOR = "#E9E9E9";
const LIGHT_MODE_BACKGROUND_COLOR = "#F1F1F1";
const LIGHT_MODE_TEXT_COLOR = "#1B1B1B";

export const generateStyles = (
    customStyles: CustomTimerPickerModalStyles | undefined
) =>
    StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            ...customStyles?.container,
        },
        contentContainer: {
            backgroundColor:
                customStyles?.backgroundColor ??
                (customStyles?.theme === "dark"
                    ? DARK_MODE_BACKGROUND_COLOR
                    : LIGHT_MODE_BACKGROUND_COLOR),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            padding: 20,
            ...customStyles?.contentContainer,
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 25,
            ...customStyles?.buttonContainer,
        },
        button: {
            marginHorizontal: 12,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 16,
            overflow: "hidden",
            ...customStyles?.text,
            ...customStyles?.button,
        },
        cancelButton: {
            borderColor: "gray",
            color:
                customStyles?.theme === "dark" ? DARK_MODE_TEXT_COLOR : "gray",
            backgroundColor:
                customStyles?.theme === "dark" ? "gray" : undefined,
            ...customStyles?.text,
            ...customStyles?.cancelButton,
        },
        confirmButton: {
            borderColor: "green",
            color:
                customStyles?.theme === "dark" ? DARK_MODE_TEXT_COLOR : "green",
            backgroundColor:
                customStyles?.theme === "dark" ? "green" : undefined,
            ...customStyles?.text,
            ...customStyles?.confirmButton,
        },
        modalTitle: {
            fontSize: 24,
            fontWeight: "600",
            marginBottom: 15,
            color:
                customStyles?.theme === "dark"
                    ? DARK_MODE_TEXT_COLOR
                    : LIGHT_MODE_TEXT_COLOR,
            ...customStyles?.text,
            ...customStyles?.modalTitle,
        },
    });
