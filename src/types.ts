// :any -> turns off typescript
// :unknown -> don't yet know what will be the type
// :void -> a function that returns nothing
// :never ->  assigned to a function which doesn't have a endpoint i.e doesn't ever finish

// const x: any = 10
const y: unknown = null

// console.log(x.foo())
// console.log(y.foo())

//type conversion / assertion in TS

const x: number = 10
const z: string = (x as unknown) as string