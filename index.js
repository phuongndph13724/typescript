// TYPE ALIAS
var studentDetails = function (id, studentName) {
    console.log("Students ".concat(studentName, " has id : ").concat(id));
};
studentDetails(123, 'đáháldsahda');
studentDetails('ph13724', 'Nguyễn Đắc Phương');
var greet = function (user) { return console.log("".concat(user.name, " with id ").concat(user.id, " s\u00E1y hello")); };
greet({ name: 'Nguyễn Đắc Phương', id: 'ph13724' });
