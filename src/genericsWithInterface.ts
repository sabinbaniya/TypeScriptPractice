interface UserInterface4<T>{
    name: string
    data: T
}

const user10: UserInterface4<{meta: string}> = {
    name: "Jhon",
    data: {
        meta: "name"
    }
}

const user11: UserInterface4<string[]> = {
    name: "Doe",
    data: ["This", "is", "array"]
}

// we can increase the functionality of interface with generics by adding <variable> to the name of interface
// and pass <variable> during time of declaration of objects
// we can pass more than one data types in generics like <T, V>