// Base/length Function
function getComponentValueBase(baseID){
    const base = document.getElementById(baseID);
    const baseStringValue = base.value;
    const baseValue = parseFloat(baseStringValue);
    base.value = '';

    if(isNaN(baseValue) || baseValue<=0 || base == ""){
        return alert('Please Input an Integer Number more than 0 in the Field');
    }
    else{
        return baseValue;
    }
}
// Width Function
function getComponentValueWidth(widthID){
    const width = document.getElementById(widthID);
    const widthStringValue = width.value;
    const widthValue = parseFloat(widthStringValue);
    width.value = '';
    if(isNaN(widthValue) || widthValue<=0 || width== ""){
        return alert('Please Input an Integer Number more than 0 in the Field');
    }
    else{
        return widthValue;
    }
}

// Dispaly Data doing Append
function displayData(elementname, areaofElement){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${elementname}</td>
        <td>${areaofElement}cm<sup>2</sup></td>
        <td><button class="btn btn-primary">Convert</button></td>
    
    ` 
    container.appendChild(tr);
}
