type ID = number
type popularTags = string[]
type MaybePopularTags = UserInterface | null

interface UserInterface {
    id: ID,
    name: string,
    age: number
}

const user3: UserInterface = {
    id: 1232,
    name: "Jhon",
    age: 23
}