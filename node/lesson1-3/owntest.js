const firstName = "alice"
const lastName = "smith"
const fullName = firstName + " " + lastName;

console.log(fullName);

const city = {
    name: "chennai",
    election_date: "2024-06-01",
    age: 300,

    
}
console.log(city.name,city.age,city.election_date);



// array of objects
const students = [
    {student1: 1, name:"prasanth", age: 33, city: "pondicherry"},
    {student2: 2 , name:"aparne", age:29, city: "chennai"},
    {student3: 3, name:"abi", age: 44, city: "newyork"}
]

console.log(students[0].name, students[1].city, students[2].age);
