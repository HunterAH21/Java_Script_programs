// longest element
function Longestword(text) {
    let words = text.split(/\W+/);
    console.log(words);
    let Word = "";
    for (let word of words) {
      if (word.length > Word.length) {
        Word = word;
      }
    }
  
    return Word;
  }
  
  let Word = Longestword("hello this is a student typing in his laptop with a lot of dreams and goals to achive");
  
  console.log(Word);

//difference between 2 array

function Difference(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element));
  }
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [4, 5, 6, 7, 8];
  
  let difference1 = Difference(array1, array2);
  let difference2 = Difference(array2, array1);
  console.log(difference1);
  console.log(difference2);


  //  Array of objects sorting with multiple properties
  const people = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'David', age: 25, city: 'New York' },
    { name: 'Eve', age: 28, city: 'Los Angeles' }
  ];
  
  people.sort((a, b) => {
    if (a.city < b.city) return -1;
    if (a.city > b.city) return 1;
    if (a.age > b.age) return -1;
    if (a.age < b.age) return 1;
    return 0;
  });
  
  console.log(people);

//rotation of array
  function RotateArray(arr, n) {
  n = n % arr.length;
  console.log(n);
  return arr.slice(n).concat(arr.slice(0, n));
}
let array = [1, 2, 3, 4, 5];
let rotated = RotateArray(array, 2);

console.log(rotated);

//Creating a new array with a given length 

let array_1 = new Array(5);
console.log(array_1);