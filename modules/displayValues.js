import { output } from "../utils/output.js";

export function displayValues(inputs= new HTMLFormElement) {
    const count = inputs.length;
    for (let i=0; i < count; i++) {
        const radioInput = inputs[i];
        const value = radioInput.value;
        output(`${value}<br>`);   
        }
}

