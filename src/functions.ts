const getFullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`
}

// we can declare a return type of function by specifying it after the ) & before {
// we can declare parameter type by writing it after them as : string.
// by default these parameters are required so to make them optional we need to use <variable>?:


getFullName("Sabin", "Baniya")