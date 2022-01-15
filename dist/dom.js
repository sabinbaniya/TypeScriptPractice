var element = document.querySelector('.foo');
element.addEventListener('keypress', function (event) {
    var target = event.target;
    console.log(target.value);
});
console.log(element);
