let greeting = "Howdy ";
let name = "Tracy";
let message = " , take a peek at our delicious coffee options!"
let welcome = greeting + name + message;

let blackcoffee = "A classic drink.";
let cappuccino = "Foamy, frothy, and delcious.";
let affogato = "Ice Cream + Coffee = Heaven";
let coldbrew = "Add almond milk for a refreshing drink!";

let el = document.getElementById('greeting');
el.textContent = welcome;

let blackCoffeeDesc = document.getElementById('blackCoffee');
blackCoffeeDesc.textContent = blackcoffee;

let cappDesc = document.getElementById('cappuccino');
cappDesc.textContent = cappuccino;

let affogatoDesc = document.getElementById('affogato');
affogatoDesc.textContent = affogato;

let coldBrewDesc = document.getElementById('coldBrew');
coldbrew.textContent = coldbrew;
