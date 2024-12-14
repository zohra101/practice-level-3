import { Column } from "../utils/Column.js";
import { GridSystem } from "../utils/GridSystem.js";
import { output } from "../utils/output.js";
import { Row } from "../utils/Row.js";

window.gridSystemExample = gridSystemExample;

export function gridSystemExample () {

    const column1 = new Column("COLUMN 1");
    const column2 = new Column("COLUMN 2");

    const row = new Row();
    row.addColumn(column1);
    row.addColumn(column2);

    const gridSystem = new GridSystem();
    gridSystem.addRow(row);
    output(gridSystem);
    // gridSystem.addColumn(column);

    
}

function practice5() {

    // const column = new Column("New Column");
    // output(column, "outputTag5");

    let rows = "";
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
        let columns = "";
        for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
            const column = new Column(`COLUMN ${ columnNumber}`);
            column.info(columnNumber);
            column. innerHTML = `COLUMN ${columnNumber}`;
            column.content();
            columns += column;
        }

        rows += `<div class="row">${columns}</div>`;
    }
    const gridSystem = `
        <div class="container">
            ${rows}
            </div>`;
    output (gridSystem, "outputTag5");
}