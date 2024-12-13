export class GridSystem {
    openingTag = "<div class = 'container'>"
    closingTag = "</div>"
    innerHTML = "";

    addRow(row = new Row()) {
        this.innerHTML += row;
    }
}