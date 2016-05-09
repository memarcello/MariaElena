var animal = {}
animal.species = "duck"
animal["name"] = "Jennifer"
animal["noises"] = "woof"
console.log(animal)


var noises = []
noises[0] = "meow"
noises.push = "woof"
noises.unshift("bleep")
noises[noises.length] = "yoyo";
console.log(noises.length);
console.log(noises[3]);
console.log(noises);


//6
var animals = []
animals.push(animal);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
animals.push(duck)
var twomore = {
    species: 'lion',
    name: 'Leo',
    noises: ["Roar", "Sniff"]
}
animals.push(twomore)
var onemore = {
    species: 'zebra',
    name: 'Ziggie',
    noises: ["Nay", "Yoyo"]
}
animals.push(onemore)
animals.length;
console.log(animals.length)

//7
var friends = [];

function randomness(animals) {
    var randomAnimal = Math.floor(Math.random(animals.length - 1));
    return animals[randomAnimal];
}

var randomAssAnimal = randomness(animals);
friends.push(randomAssAnimal.name);
animals[2].friends = friends;


//8
function search(nameofAnimal) {
    for (var i = 0; i < animals.length; i++)

if (nameofAnimal === animals[i].name) {
        return animals[i];
    }
};

//8-2
function edit(nameofAnimal,object) {
    for (var i = 0; i < animals.length; i++){
        if (nameofAnimal === animals[i].name) {
            animals[i] = object;
        }
    }
}

//8-3
function remove(nameofAnimal) {
    for (var i = 0; i < animals.length; i++){
        if (nameofAnimal === animals[i].name) { 
        return animals.splice (i,1);
        }
    }
}

//8-4
function create(object) {
    for (var i = 0; i < animals.length; i++){
        if (object.name.length <= 0 || object.species.length <= 0 || animals[i].name === object.name){
        
        return null;
        }
        
        animals.push(object);
        return animals;
    }
        }