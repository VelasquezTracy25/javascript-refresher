let name;
let roomNumber;
let booked;

function hotel(name, rooms, booked) {
    // object variable = local variable
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    return this.name + " is staying in room " + this.rooms + ". Mark this room as " + this.booked;
}

console.log(hotel("Tracy", 201, true));
