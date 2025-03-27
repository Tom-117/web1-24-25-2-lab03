import {userList} from './db.js'; //ahhoz hogy mukodjon,a html fileban a type=module-t kell


for (let index = 0; index < userList.length; index++) {
console.log(userList[index].id);
console.log(userList[index].name);
console.log(userList[index].age);}


//primitive types
const isactivated=true;//bool
const username='Jeremy';//string
const usercount=15;//number
const nothing=null;//object
let base;//undefined
//var helyett const vagy let preferalt, let valtozot felul lehet irni futas kozben
console.log(typeof isactivated);
console.log(typeof username);
console.log(typeof usercount);
console.log(typeof nothing);
console.log(typeof base);



//prototype
//modulo keszites
Number.prototype.mod=function(divider){
return this % divider;//this--a szam amire meghivjuk
};
console.log('valami kor mod: ' + userList[0].age.mod(2));
console.log( usercount.mod(3) );

//collections

const numbers=[3,5,7,['Marika',true],1,99,0];//tomboknek tobb fajta eleme is lehet
console.log(numbers[3][0]);//marikat irja ki
console.log(numbers.length); //tomb hosszat irja ki, az alelemeket nem szamolja

//objects

console.log(userList[2].age);
const key='name';
console.log(userList[2][key]);//kulcs egy valtozoban van