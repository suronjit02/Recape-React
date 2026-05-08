console.log("Hello, React!");

const friends = ["Alice", "Bob", "Charlie"];

friends.push("David"); //add a element to the end of the array
friends.pop(); //remove the last element of the array

friends.unshift("Eve"); //add a element to the beginning of the array
friends.shift(); //remove the first element of the array

// console.log(friends.slice(1, 3));

// spread operator
const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log(...numbers);

const newNumbers = [...numbers, 6, 7, 8];
// console.log(newNumbers);

// -------------------------------------------------------------------

const products = [
  { name: "Redmi", brand: "Xiaomi", price: 10000, color: "black" },
  { name: "iPhone", brand: "Apple", price: 70000, color: "white" },
  { name: "Galaxy", brand: "Samsung", price: 50000, color: "blue" },
  { name: "Pixel", brand: "Google", price: 60000, color: "black" },
  { name: "OnePlus", brand: "OnePlus", price: 40000, color: "red" },
];

const result = products.map((product) => product.price);

// console.log(result);

const result2 = products.filter((product) => product.color === "black");
// console.log(result2);

const result3 = products.find((product) => product.brand === "Apple");
// console.log(result3);

// ------------------------------------------------------------------------

// Destructuring

const friend = ["John", "dOna", "Smith"];

const [firstFriend, secondFriend, thirdFriend] = friend;

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;

// ----------------------------------------------------------------------------

// json

const personData = {
  name: "Hero Alom",
  age: 30,
  friend: ["Alice", "Bob", "Charlie"],
  family: {
    father: "John Doe",
    mother: "Jane Doe",
    sister: "Emily Doe",
  },
};

const personDataString = JSON.stringify(personData);
// console.log(personDataString);

const personDataObject = JSON.parse(personDataString);
// console.log(personDataObject);

// fetch

// fetch("url-here")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error fetching data:", error));

// ----------------------------------------------------------------------------

// keys - values - entries

const personData2 = {
  name: "Hero Alom",
  age: 30,
  friend: ["Alice", "Bob", "Charlie"],
  family: {
    father: "John Doe",
    mother: "Jane Doe",
    sister: "Emily Doe",
  },
};

const keys = Object.keys(personData2);
// console.log(keys);

const values = Object.values(personData2);
// console.log(values);

const entries = Object.entries(personData2);
// console.log(entries);

// ----------------------------------------------------------------------------

// add property and remove property

const products2 = [
  { name: "Redmi", brand: "Xiaomi", price: 10000, color: "black" },
  { name: "iPhone", brand: "Apple", price: 70000, color: "white" },
  { name: "Galaxy", brand: "Samsung", price: 50000, color: "blue" },
  { name: "Pixel", brand: "Google", price: 60000, color: "black" },
  { name: "OnePlus", brand: "OnePlus", price: 40000, color: "red" },
];

const newProducts = {
  name: "MacBook Pro",
  brand: "Apple",
  price: 150000,
  color: "silver",
};

const newArray = [...products2, newProducts];
// console.log(newArray);
