import { output } from "../utils/output.js";

export function displayCheckedDatatype(inputs = new HTMLFormElement()) {
    const count = inputs.length;
    output("<br>The checked datatype is ")
    for (let i=0; i < count; i++) {
        const radioInput = inputs[i];
        const value = radioInput.value;
        const name = radioInput.name;
        const isChecked = radioInput.checked;
        const isDatatype = name === "dataType";
        if (isChecked && isDatatype) output(`${value}.<br>`); 
    }
}