const _ = require("lodash");

// Array methods
console.log("_.chunk(array, [(size = 1)])");
// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
//Returns the new array of chunks.

console.log(_.chunk(["a", "b", "c", "d"], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(["a", "b", "c", "d"], 3));
// => [['a', 'b', 'c'], ['d']]

console.log(
  _.chunk(
    [1, 2, 3, 4].map((n) => n * 2),
    2
  )
);

console.log("_.compact(array)");
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Returns the new array of filtered values.

console.log(_.compact([0, 1, false, 2, "", 3]));
// => [1, 2, 3]

console.log("_.concat(array, [values])");
// Creates a new array concatenating array with any additional arrays and/or values.
// Returns the new concatenated array.
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

console.log("_.difference(array, [values])");
//Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
// Returns the new array of filtered values.

console.log(_.difference([2, 1], [2, 3]));
// => [1]

console.log("_.drop(array, [n=1])");
//Creates a slice of array with n elements dropped from the beginning.
//Returns the slice of array.

console.log(_.drop([1, 2, 3]));
// => [2, 3]

console.log(_.drop([1, 2, 3], 2));
// => [3]

console.log(_.drop([1, 2, 3], 5));
// => []

console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]

console.log("_.dropRight(array, [n=1])");
// Creates a slice of array with n elements dropped from the end.
// Returns the slice of array.

console.log(_.dropRight([1, 2, 3]));
// => [1, 2]

console.log(_.dropRight([1, 2, 3], 2));
// => [1]

console.log(_.dropRight([1, 2, 3], 5));
// => []

console.log(_.dropRight([1, 2, 3], 0));
// => [1, 2, 3]

console.log("_.dropWhile(array, [predicate=_.identity])");
// Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
// Returns the slice of array.

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

const numbers = [1, 1, 1, 0, 0, 0, 1, 2, 3, 4, 0, 0];

console.log(
  _.dropWhile(users, function (o) {
    return !o.active;
  })
);
// => objects for ['pebbles']

console.log(
  _.dropWhile(numbers, function (o) {
    return o === 1;
  })
);

console.log("_.fill(array, value, [start=0], [end=array.length])");
