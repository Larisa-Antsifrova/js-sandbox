// Дан массив чисел, допустим от 1 до 100.
// Нужно сделать так, что бы числа, делящиеся на 3 без остатка принимали значения Foo,
//   а числа, делящиеся на 5 принимали значение Bar,
//     а числа делящиеся на 3 и на 5 принимали значение Foobar.

// for (let i = 1; i <= 100; i++) {
//   let number = i;

//   if (i % 3 === 0 && i % 5 === 0) {
//     number = "Foobar";
//     console.log(`${i} ${number}`);
//   } else if (i % 3 === 0) {
//     number = "Foo";
//     console.log(`${i} ${number}`);
//   } else if (i % 5 === 0) {
//     number = "Bar";
//     console.log(`${i} ${number}`);
//   }
// }
