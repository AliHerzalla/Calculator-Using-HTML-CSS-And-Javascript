const mainInput = document.getElementById("input");
const clearBtn = document.getElementById("clear");
const eraseBtn = document.getElementById("erase");
const equalBtn = document.getElementById("equal");
let button = document.querySelectorAll(".input-button");
const zeroBtn = document.querySelector(".zero-btn");

// var
let equal_pressed = 0;

window.onload = () => {
    mainInput.value = "";
};


button.forEach(ele => {
    ele.addEventListener("click", () => {
        if (equal_pressed != 0) {
            equal_pressed = 0;
        }
        mainInput.value += ele.value;
    });
});

equalBtn.addEventListener("click", () => {
    equal_pressed = 1;
    let input_val = mainInput.value;
    try {

        let solution = eval(input_val);

        if (Number.isInteger(solution)) {
            mainInput.value = solution;
        } else {
            mainInput.value = solution.toFixed(4);
        }

    } catch (error) {
        console.log(error);
    }
});

eraseBtn.addEventListener("click", () => {

    //in one line
    // mainInput.value = mainInput.value.substr(0, mainInput.value.length - 1);

    //in multiple line's
    let mainInputArray = [];
    for (let index = 0; index < mainInput.value.length - 1; index++) {
        mainInputArray.push(mainInput.value[index]);
    }
    mainInput.value = mainInputArray.join("");

});

clearBtn.addEventListener("click", () => {
    mainInput.value = "";
});