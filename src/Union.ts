const errorMessage: string | null = null

// ' | ' is used to assign multiple different types of data types to one variable
// we can assign multiple number of data types in one variable but it is not good to assign so much more that it removes the point of using typescript
// we can also supply data types as Interfaces 

interface IUser {
    name?: string
    age?: number
}