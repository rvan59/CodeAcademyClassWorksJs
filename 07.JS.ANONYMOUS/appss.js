// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// // task1 l
// let tek = number.filter((item)=>{
//     return item%2===1;
// })
// console.log(tek);
// // task1 ll
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let araliq = array.filter((item) => {

//    return item>0 && item<=10;
//   });
//   console.log(araliq);
// task2 l
const users = [
   {
     first_name: 'Mike',
     last_name: 'Sheridan'
   },
   {
     first_name: 'Tim',
     last_name: 'Lee'
   },
   {
     first_name: 'John',
     last_name: 'Carte'
   }
 ];
let fulName = users.map((item) => `${item.first_name} ${item.last_name}`);

console.log(fulName);