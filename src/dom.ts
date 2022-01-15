const element = document.querySelector('.foo') as HTMLInputElement

element.addEventListener('keypress', event => {
    const target = event.target as HTMLInputElement
    console.log(target.value)
})

console.log(element)