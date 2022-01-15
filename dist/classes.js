var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // changeConstant(){
    //     this.constantProperty = 'hello'
    // }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.maxAge = 50; //accessbile only in the class itself
    return User;
}());
var newUser = new User("Sabin", "Baniya");
console.log(newUser.getFullName);
console.log(User.maxAge);
