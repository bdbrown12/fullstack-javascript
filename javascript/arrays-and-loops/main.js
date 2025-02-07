let people = ["John", "Jacob", "Jesse", {bookname: "john"}];

//Array.foreach() method - used for arrays
people.forEach((name, index) => {
    console.log("Name:" + name);
    console.log("Index:" + index);
});

//for in loop - used for objects. Loops through object keys

const object = {"a": 1, "b": 2, "c":3};

for (const property in object){
    console.log(`${property} : ${object[property]}`);
}
