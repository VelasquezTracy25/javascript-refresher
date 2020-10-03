function getSize(length, width, height) {
    let area = length * width;
    let volume = length * width * height;
    let name = "tracy"
    let sizes = [area, volume, name];
    return sizes;
}

console.log("Index 0: " + getSize(3, 2, 3,)[0]);
console.log("Index 1: " + getSize(3, 2, 3,)[1]);
console.log("Name test: " + getSize(3, 2, 3)[2]);

// function declaration

function area(length, width) {
    return length * width;
}

//function expression

let area = function (length, width) {
    return length * width;
}

//IIFE - immediately invoked function expression
let area = (function () {
    let length = 3;
    let width = 5;
    return length * width;
}());
