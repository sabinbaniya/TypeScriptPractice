var statuses = {
    notStarted: 0,
    inProgress: 1,
    completed: 2
};
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["notStarted"] = "notStarted";
    StatusEnum["inProgress"] = "inProgress";
    StatusEnum["completed"] = "completed";
})(StatusEnum || (StatusEnum = {}));
console.log(statuses.completed);
