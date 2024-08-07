import React from "react";

import { render } from "@testing-library/react-native";

import TimerPicker from "../components/TimerPicker";

describe("TimerPicker", () => {
    it("renders without crashing", () => {
        const { getByTestId } = render(<TimerPicker />);
        const component = getByTestId("timer-picker");
        expect(component).toBeDefined();
    });

    it("renders without crashing with negative padWithNItems", () => {
        const { getByTestId } = render(<TimerPicker padWithNItems={-1} />);
        const component = getByTestId("timer-picker");
        expect(component).toBeDefined();
    });

    it("hides minutes and seconds when respective hide props are provided", () => {
        const { queryByTestId } = render(
            <TimerPicker hideMinutes hideSeconds />
        );
        const minutePicker = queryByTestId("duration-scroll-minute");
        const secondPicker = queryByTestId("duration-scroll-second");
        expect(minutePicker).toBeNull();
        expect(secondPicker).toBeNull();
    });
});
