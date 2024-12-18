import { displayCheckedStatus } from "../modules/displayCheckedStatus.js";
import { displayCategories } from "../modules/displayCategories.js";
import { displayValues } from "../modules/displayValues.js";
import { displayCheckedValues }  from "../modules/displayChceckedValues.js";
import { displayCheckedDatatypes } from "../modules/displayChceckedDatatype.js";

window.handleSubmit = handleSubmit;

export function handleSubmit(event = new Event()) {
    event.preventDefault();
    debugger;

    const inputs = event.target;
    displayCheckedStatus(inputs)
    displayCategories(inputs);
    displayValues(inputs);
    displayCheckedValues(inputs);
    displayCheckedDatatypes(inputs);
 }
