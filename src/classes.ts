interface UserInterface2{
    getFullName(): string
}

class User implements UserInterface2{
    private firstName: string
    private lastName : string
    readonly constantProperty: string //declare a constant unchangable variable
    static readonly maxAge = 50 //accessbile only in the class itself

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }

    // changeConstant(){
    //     this.constantProperty = 'hello'
    // }

    getFullName(): string{
        return `${this.firstName} ${this.lastName}`
    }
}

const newUser = new User("Sabin", "Baniya")
console.log(newUser.getFullName)
console.log(User.maxAge)
