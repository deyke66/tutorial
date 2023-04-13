// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//     orderedItems.forEach(function (element, idx) {
//         totalPrice += element
//     })
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4])



//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль


// const makeProduct = (name, price, callback) => {
//     const product = {
//         name,
//         price,
//         id: Math.random()
//     }
//     callback(product)
//  }
// const showProduct = product => {
//     console.log(product)
// };

// makeProduct('iphone', 5000, showProduct)


// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
// {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];


// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
  
//   numbers.forEach(item => !(item%2) ? newArray.push(item+=value) : newArray.push(item))
  
// }

//   changeEven([1, 2, 3, 4, 5], 10)


// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг(властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(({genres})=>genres);
// const uniqueGenres = allGenres.filter((item, index, array) => {
//   console.log(array.indexOf(item)===index)
//   // array.indexOf(item) === index
// });

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// const getUsersWithFriend = (users, friendName) => {
//   const allFriends = [];
//   users.filter(item => {
//     if (item.friends.includes(friendName)) {
//       allFriends.push({
//         ...item
//       })
//     }
//   })
//   return allFriends
// }
  


// console.log(getUsersWithFriend(users, "Briana Decker"))

// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.




// const getFriends = (users) => {
//    const allFriends = users.flatMap(({friends})=>friends);
//   return allFriends.filter((item, index, array)=>array.indexOf(item)===index)
// };



// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc,item)=>{
//   return (acc+item.playtime/item.gamesPlayed)
  
  
// },0);
// console.log(totalAveragePlaytimePerGame)


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((a, b) => a.author.localeCompare(b.author)).filter(({rating})=>rating>MIN_BOOK_RATING).map(item=>item.author);
// console.log(names)



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(item=>item.name);
// console.log(getNamesSortedByFriendCount(users))


// const getSortedFriends = users => [...users].flatMap(item=>item.friends).sort((a,b)=>a.localeCompare(b)).filter((item,idx,arr)=>arr.indexOf(item)===idx);

// console.log(getSortedFriends(users))

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) => users.filter(item=>item.gender===gender).reduce((total,item)=>total+=item.balance,0);

// console.log(getTotalBalanceByGender(users, "male"))



// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//     checkPizza(pizzaName) {
      
//     return this.pizzas.includes(pizzaName);
//     },
    
//   order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
      

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"))





























// <div>
//       <p class="taskTitle">ЗАДАЧА 6</p>
//       <ul class="list">
//         <li class="listItem">1</li>
//         <li class="listItem">4</li>
//         <li class="listItem">8</li>
//         <li class="listItem">16</li>
//         <li class="listItem">20</li>
//         <li class="listItem">30</li>
//       </ul>
//       <button id="double">Удвоить</button>
//     </div>
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const refs = {
//     ul: document.querySelector('.list'),
//     li: document.querySelectorAll('.listItem'),
//     button: document.querySelector('#double'),
// }

// refs.button.addEventListener('click', onDoubleButton);

// function onDoubleButton() {
//     refs.li.forEach(item => item.textContent *= 2)
// }

// const refs = {
//     ul: document.querySelector('.list'),
// }

// refs.ul.addEventListener('click', onClickDoubleValue);

// function onClickDoubleValue(evt) {
//     console.dir(evt.target)
//     if (evt.target.nodeName !== "BUTTON") {
//         return
//     }
//     evt.target.textContent *=2
// }


