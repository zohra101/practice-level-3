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