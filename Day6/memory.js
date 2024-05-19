// Stack memory, Heap Memory

// Primitive Datatypes use Stack & Non primitive types use Heap memory
// Stack gives copy of value whereas Heap gives reference of value

// let myName="bimo"
// let anotherName = myName

// anotherName = "bimochan"

// console.log(myName)
// console.log(anotherName)

let user = {
    email: "user@user.user",
    name: "user"
}

let user2 = user

user2.email = "bimo@user.user"

console.log(user.email)
console.log(user2.email)