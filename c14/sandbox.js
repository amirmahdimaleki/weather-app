// ! LOCAL STORAGE EXAMPLES

//  store data in local storage

localStorage.setItem('name1', 'amir')
localStorage.setItem('age', 17)

// ? keys and values in local storage always turn into string => 17 > "17"
// ? now the data is stored in my browser so if I comment 5&6 it will work too.

//  get data from local storage
let name1 = localStorage.getItem('name1')
let age = localStorage.getItem('age')

console.log(name1, age)

//  updating data

// ? we update data by using setItem and overwriting it

localStorage.setItem('name1', 'amirmahdi')
localStorage.setItem('age', 18)

name1 = localStorage.getItem('name1')
age = localStorage.getItem('age')

console.log()