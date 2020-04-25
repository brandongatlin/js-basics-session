// objects
const obj = {
    "name" : "brandon",
    "age" : 38,
    "hobbies" : ["coding", "wood working", "?", "anoth one"]
}
// syntax
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.hobbies[2]);
// console.log(obj["hobbies"][2]);
// console.log(obj.hobbies[obj.hobbies.length - 1]);

// find specific value in array

// find if value exists in array
const arr = obj.hobbies;
const found = arr.find(function(el){
    return el === '?';
});

const arrowFound = arr.find(el => el === 'wood working');

if(arr.indexOf('wood working') === -1){
    console.log('wood working does not exist')
} else {
    console.log('wood working exists')
}

console.log(arr.includes('woodworking')); // return true or false

// this
const car = {
    name : "volvo",
    start: function(){
        console.log(this.name + ' has started');
    }
}

car.start(); // volvo has started
console.log(this); // {}
