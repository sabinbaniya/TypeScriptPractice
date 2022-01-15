interface IUser{
    name: string,
    age?: number
}

const user1: IUser = {
    name: "Jhon",
}

// In typescript we can define interface for making a prototype for object, we specify the key then the type of value. 
// We use ? after the variable name to make that key optional.
// Naming convention we use I in postfix or Interface in prefix for a interface