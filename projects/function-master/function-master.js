function objectValues(obj) {
    var array = [];
    for (var key in obj) {
    array.push(obj[key]);
}
return array;
}


//keys to string using method chaining

function keysToString(obj){
    return Object.keys(obj).join(' ');
}


//3 values to string
function valuesToString(obj){
    var empty = [];
    var keys = Object.keys(obj);
    for(var i = 0; i < keys.length; i++){
        console.log(typeof obj[keys[i]] === "string");
        if (typeof obj[keys[i]] === "string"){
            empty.push(obj[keys[i]]);
        } 
    }
    
    console.log(empty)
    return empty.join(" ");
} 

//4 array or object     
function arrayOrObject(argument){
    if (Array.isArray(argument)) {
        return "array";
    } 
    else return "object";
}

//5 capitalize the first word
function capitalizeWord (word){ 
    return word[0].toUpperCase() + word.slice(1);
}

//6 capitalizeAllWords
function capitalizeAllWords (words) {
    var splitWords = words.split(" ");
    for(var i = 0; i < splitWords.length; i++){
    splitWords[i] = capitalizeWord(splitWords[i]);
    }
    return splitWords.join(" ");
}


//7  welcome message
function welcomeMessage(obj) {
    return "Welcome " + capitalizeWord(obj.name) + "!";
}


//8 profileInfo  
function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}


//9 maybeNoises
function maybeNoises(obj){
    if (Array.isArray(obj.noises) && (obj["noises"].length > 0)) {
    return (obj.noises.join(" "));
        }
        else {
        return "there are no noises";
        }
}

//10 hasWord
function hasWord(string, word){
    if(string.indexOf(word) >=0){
    return true;
    }else return false;
    }

//11 addFriend
function addFriend(name,obj){
    obj["friends"].push(name);
    return obj;
    }
    
    
//12 isFriend
function isFriend(name, obj){
    if (obj.friends) {
        for(var i = 0; i <= obj.friends.length; i++){
            if (obj.friends[i] === name){
                return true;
            }
        }
    }
    return false;
}

//13 global nonFriends
    //see who is not in the named person's friends list

function nonFriends(name,people){
  var namedPerson;
  for (var i = 0; i < people.length; i++){
    if (name === people[i].name){
        namedPerson = people[i];
    }
    }
    //make sure not to add the named person to the list 
    //return the lit
    var out = [];
    for (var j = 0; j < people.length; j++){
        if (people[j].name === name) continue;
        
    if (namedPerson.friends.indexOf(people[j].name) === -1){
    out.push(people[j].name);
    } 
    }
    return out;
}

//14 global updateObject