// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         console.log('Парне ', i)
//         total += i;
//         console.log('add', total)
//     }
//     console.log(i)

// }




// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// function count(countFrom = 0, countTo = 15, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count(5)

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo()

// function getExtremeElements(array) {
//     // Change code below this line
//     array = [array[0], array[array.length - 1]];
//     return array;

//     // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);


//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// function foo() {
//     const answer = prompt("Яка офіційна назва JavaScript?");
//     console.log(answer);
//     if (answer === "ECMAScript") {
//         alert("Вірно!")
//     } else {
//         alert("Не знаєте? ECMAScript!")
//     }

// }
// foo()
// console.log('привіт ')


// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
    
//     return message.split(' ').length * pricePerWord;
    
//     console.log(arr)


//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)



// function slugify(title) {
//   // Change code below this line
//     const slug = title.split(' ').join('-').toLowerCase();
//     console.log(slug)
//   // Change code above this line
// }
// slugify("Arrays for begginers");




// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//     let total = 0;
//     console.log(total)
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         console.log(order[i])
//         total += order[i];
//     }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]) // 138

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.



// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(' ');
//   let longestElement = array[0];
//   for (let i = 0; i < array.length; i += 1){
//     let longestString = array[i].length;

//     if (longestString > longestElement.length) {
//       longestElement = array[i];
      
//     }
    
//   }
//   console.log(longestElement)

// }
        
        
//   // Change code above this line
// }
// function findLongestWord(string) {
//   // Change code below this line
//   let str = string.split(' ');
//   let longestWord = str[0];
//     for (let i = 0; i < str.length; i += 1) {
//       if (str[i].length > longestWord.length) {
//       longestWord = str[i];
//     }
//   }
//   // Change code above this line
//       return longestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog") //повертає jumped



// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//   // Change code above this line
//   console.log(numbers)
//   return numbers;
// }
// createArrayOfNumbers(14, 17)



// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).


// function filterArray(numbers, value) {
//   // Change code below this line
//   const arr = [];
//   for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > value) {
//       arr.push(numbers[i])
//     }
//   }
//   return arr;
//   // Change code above this line
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));




// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.




// function getCommonElements(array1, array2) {
//   // Change code below this line
// const arr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       arr.push(array1[i])
//     }
    
//   }
//   return arr;
  
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let element of order) {
  
//     total += element;
//   }
//   console.log(total)
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4])


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }

// }
// console.log(number)





