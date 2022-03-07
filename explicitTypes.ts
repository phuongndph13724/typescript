//  EXPLICIT TYPES

let myName : string;
let age : number;
let isAuthenticated :boolean;

myName = 'adada';
// myName = 12;

age = 10;
// age = 'adsada';

// isAuthenticated = 10;
// isAuthenticated = 'sdsadas';
isAuthenticated = false;

// arr

let stydents: string[] = ['nam','cò'];
stydents.push('phương');
// stydents.push(1);

// union
let mixed: (string|number| boolean)[];
mixed = ['phương',5,true];
mixed.push(5);
mixed.push('nam');
mixed.push(false);


let id: string | number;
id ='1232';
id = 1232;

let hobby : 'book'|'music';
hobby = 'book'
// hobby = 'cooking';

// objece
let person:object;
person = {name:'phương', age: 21}
person =[];


let student : {
    name : string,
    age : number,
    isGood: boolean


}
student = {
    name : 'đỗ',
    age : 21,
    isGood : true
}

