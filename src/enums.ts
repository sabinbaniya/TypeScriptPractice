const statuses = {
    notStarted: 0,
    inProgress: 1,
    completed: 2
}

enum StatusEnum{
    notStarted = 'notStarted',
    inProgress = 'inProgress',
    completed = 'completed'
}

interface UserInterface5{
    name: string,
    status: StatusEnum
}

console.log(statuses.completed)