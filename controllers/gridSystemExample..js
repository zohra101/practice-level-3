import { Column } from "../utils/Column.js";
import { GridSystem } from "../utils/GridSystem.js";
import { output } from "../utils/output.js";
import { Row } from "..utils/Row.js";

window.gridSystemExample = gridSystemExample;

export function gridSystemExample() {
    debugger;
    const gridSystem = new GridSystem();

    // let rows = "";
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
            const row = new Row();

        // let columns = "";
        for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
            const column = new Column(`COLUMN ${ columnNumber}`);
            row.addColumn(column);
            // columns += column;
        }
        gridSystem.addRow(row);
        // rows += `<div class="row">${columns}</div>`;
    }
    // const gridSystem = `
    //     <div class="container">
    //         ${rows}
    //         </div>`;
    output (gridSystem);
    
}


