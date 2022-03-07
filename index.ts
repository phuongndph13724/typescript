// TYPE ALIAS

type StringOrNumber = string | number;
type Student = {
    name : string,
    id : StringOrNumber
}
const studentDetails = (id :StringOrNumber , studentName: string) : void => {
    console.log(`Students ${studentName} has id : ${id}`);
}
studentDetails(123,'đáháldsahda');
studentDetails('ph13724','Nguyễn Đắc Phương');

const greet = ( user: Student) => console.log(`${user.name} with id ${user.id} sáy hello`);
greet({name:'Nguyễn Đắc Phương', id : 'ph13724'})