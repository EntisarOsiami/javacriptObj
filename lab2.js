const characters = [
    {
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "Kevin",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];

// 1 - used the map after the filter method to get the names from the object character.
let character0 = characters.filter((character) => character.mass > 75).map((character) => character.name);
console.log(character0);
// 2
let character1 = characters.find((character1) => character1.height < 180)
console.log(character1.eye_color);
// 3
let character2 = characters.filter((character2) => character2.height > 150 && character2.height < 210)
console.log(character2);
// 4
let character3 = characters.filter((character3) => character3.gender === "female")
console.log(character3);
// 5
let eyeColors = characters.map((character) => character.eye_color);
console.log(eyeColors);
// 6
let masses = characters.map((character) => character.mass);
console.log(masses);
// 7 - using the spread operator to create a shallow copy of the array << prevent sort from mutating the original array.
let sortedCharactersNames = [...characters].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedCharactersNames);
// 8 - using toSorted method to sort the array. << this method does not mutate the original array.
let sortedCharactersHeight = characters.toSorted((a, b) => a.height - b.height);
console.log(sortedCharactersHeight);
// 9
let checkHeight = characters.every((character) => character.height > 100);
console.log(checkHeight);
// 10
let checkWeight = characters.every((character) => character.mass < 200);
console.log(checkWeight);
// 11
let eyeCheck = characters.some(character => character.eye_color === "black");
console.log(eyeCheck);
// 12
let checkHeight2 = characters.some(character => character.height > 177);
console.log(checkHeight2);







