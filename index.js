// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
};

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
    drivers.pop();
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
};

function appendDriver(name) {
    drivers.push(name);
};

function prependDriver(name) {
   return drivers.splice(0, 0, name);
};

function removeLastDriver() {
    console.log(drivers.slice(-1));
};

function removeFirstDriver() {
    drivers.slice(1);
};