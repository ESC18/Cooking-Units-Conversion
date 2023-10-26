const input = document.getElementById("number").value;
const output = document.getElementById("output");
const form = document.getElementById("form");

function conversionDetermine() {
    const select = document.getElementById("unit1").value;
    const selectTwo = document.getElementById("unit2").value;
    if (select === "oz") {
        if (selectTwo === "oz") {
            return output.innerHTML = (parseInt(input) * 1).toFixed(2) + " oz";
        }
        else if (selectTwo === "lb") {
            return output.innerHTML = (parseInt(input) / 16).toFixed(2) + " lb";
        }
        else if (selectTwo === "g") {
            return output.innerHTML = (parseInt(input) * 28.35).toFixed(2) + " g";
        }
    }
    else if (select === "lb") {
        if (selectTwo === "oz") {
            return output.innerHTML = (parseInt(input) * 16).toFixed(2) + " oz";
        }
        else if (selectTwo === "lb") {
            return output.innerHTML = (parseInt(input) * 1).toFixed(2) + " lb";
        }
        else if (selectTwo === "g") {
            return output.innerHTML = (parseInt(input) * 453.6).toFixed(2) + " g";
        }
    }
    else if (select === "g") {
        if (selectTwo === "oz") {
            return output.innerHTML = (parseInt(input) / 28.35).toFixed(2) + " oz";
        }
        else if (selectTwo === "lb") {
            return output.innerHTML = (parseInt(input) / 453.6).toFixed(2) + " lb";
        }
        else if (selectTwo === "g") {
            return output.innerHTML = (parseInt(input) * 1).toFixed(2) + " g";
        }
    }
}












