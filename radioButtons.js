function handleSubmit(event = new Event()) {
    event.preventDefault();

    const inputs = event.target;

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

    debugger;

    const count = inputs.length;
    for (let i=0; i < count; i++) {
        const radioInput = inputs[i];
        const name = radioInput.name;
        output(`${radioInput.name}<br>`);
    }

    for (let i=0; i < count; i++) {
        const radioInput = inputs[i];
        const value = radioInput.value;
        output(`${radioInput.value}<br>`);
    }

    for (let i=0; i < count; i++) {
        const radioInput = inputs[i];
        const value = radioInput.value;
        const isChecked = radioInput.checked;
        if (isChecked) output(`${value}<br>`);   
        }

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
