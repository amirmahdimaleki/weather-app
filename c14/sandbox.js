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

console.log(name1, age)


// deleting item from local storage
localStorage.removeItem('name1')
name1 = localStorage.getItem('name1')
console.log(name1) // => null

//  deleting all items from local storage
localStorage.clear()

name1 = localStorage.getItem('name1')
age = localStorage.getItem('age')

console.log(name1, age) // => null null
// ========================================================================


// ? line 8 so :
// ? to stringify complex data's like array of objects :

const todo = [
    {txt: "hello", author: "mammad" },
    {txt: "bye", author: "shaban" },
    {txt: "holy crab", author: "gholam" }
]

//   console.log(JSON.stringify(todo))
    //=> e.g: txt> "txt" (in json files is like that)

    // ? store the data

    localStorage.setItem('todo', JSON.stringify(todo))

    const stored = localStorage.getItem('todo')
    console.log(JSON.parse(stored)); //=> if without json parse it would be json but with it its an array of objects like todo
    