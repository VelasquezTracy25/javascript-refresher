function getSize(length, width, height) {
    let area = length * width;
    let volume = length * width * height;
    let sizes = [area, volume];
    return sizes;
}

console.log("Index 0: " + getSize(3, 2, 3,)[0]);
console.log("Index 1: " + getSize(3, 2, 3,)[1]);