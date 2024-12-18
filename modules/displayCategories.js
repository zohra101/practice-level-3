import { output } from "../utils/output.js";

export function displayCategories(inputs = new HTMLFormElement()) {
    const count = inputs.length;
    for (let i=0; i < count; i++) {
        const radioInput = inputs[i];
        const name = radioInput.name;
        output(`${radioInput.name}<br>`);
    }
}