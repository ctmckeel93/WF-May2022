// Condiitonals

var num = 20
var limit = 10

if (num < limit) {
    console.log("Its small");
} else if (num !== limit) {
    console.log("Its equal")
} else {
    console.log("Its bigger")
}

var numcheck = 10 === "10";
console.log(numcheck);
// Arrays

var array = [3,2,1,5,4]
console.log(array);
// array.sort();
console.log(array);
console.log("array length:",array.length)
console.log(array[3]);
array.push(6);
console.log(array)
array.pop();
console.log(array)
array[array.length-1] = "pumpkin";
console.log(array);

// var array = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: "pumpkin",
//     length: 4
    
// }


// Objects

// Syntax -> { key:value, key:value}

var person = {
    firstName: "Corey",
    lastName: "Mckeel",
    age: 28,
    fullname: function getFullName() {console.log(this.firstName + " " + this.lastName)},
}

person["firstName"] = "Casey";
person.occupation = "Teacher";
console.log(person.fullname());
console.log(person)


// for loops
    for (var i = 0; i < 10; i++) {
        if (i == 5) {
            continue
        }
        console.log(i)
    }
// while loops
    var i = 0
    while (i < 10) {
        console.log(i)
        i++
    }
// return 

// for in/of loops

// looping through objects
for (var key in person) {
    console.log("key:",key, "-", person[key] )
}

// looping through arrays
for (var num of array) {
    console.log(num);
}
// timeout/interval

// Arrow Functions


