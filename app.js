// FindLast//
const arr = [12, 122, 23, 100, 13, 190]
// findIndex
const newArray = arr.findLast(x=>x > 100)
// return last number > 100
console.log(newArray);



// findIndex//
// return last number > 100
const arr1 = arr.findIndex(x => x >100)
// return index 23  this index = 1

console.log(arr1);



// find()//
const person = [
    {
        name: " soufiqne",
        FullName: "bouanaya",
        age: 20

    },
    {
        name: " hamza",
        FullName: "bouanaya",
        age: 25

    },
    {
        name: " reda",
        FullName: "bouanaya",
        age: 13

    }
]

const arr2 = person.find(x => x.age === 13)
// return first element he fulfils the condition age = 13
console.log(arr2);



