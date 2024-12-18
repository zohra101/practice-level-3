import { output } from "../utils/output.js";

export function displayCheckedStatus(inputs = new HTMLFormElement()) {
    const greenInput = inputs[0];
    const purpleInput = inputs[1];
    const redInput = inputs[2];
    const blueInput = inputs[3];

    const greenChecked = greenInput.checked;
    const purpleChecked = purpleInput.checked;
    const redChecked = redInput.checked;
    const blueChecked = blueInput.checked;

    output(`green: ${greenChecked}<br>`);
    output(`purple: ${purpleChecked}<br>`);
    output(`red: ${redChecked}<br>`);
    output(`blue: ${blueChecked}<br>`);
}