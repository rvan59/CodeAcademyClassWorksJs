// task1
// function printFulName ( firdtName="lorem", lastName="ipsum"){
//     let result = `I am ${firdtName} ${lastName}`;
// return result;
// }
// console.log(printFulName("Revan", "Muxdarov"));
// // task2

// let sum =(num1,num2)=> num1+num2;{
//     console.log(sum(2,3))}

// let maltiply =(num1,num2)=> num1*num2;{
//     console.log(maltiply(2,3))}

// let sub =(num1,num2)=> num1-num2;{
//     console.log(sub(3,2))}

// let divide =(num1,num2)=> num1/num2;{
//     console.log(divide(6,3))}

// // task3

// function calculate(number1,number2,operator) {
//     let result  ;
//     if(operator==="+"){
//         result=number1+number2;
//     }
//     else if (operator==="*"){
//         result=number1*number2;

//     }
//    else if(operator==="/"){
//    result=number1/number2;
// }
//    else if(operator==="-"){
//     result=number1-number2
//    }
//    else{result="buoperator deyil"}
//    return result;
//   }
//     console.log(calculate(1,2, "+"));
//     console.log(calculate(2,2, "*"));
//     console.log(calculate(6,2, "/"));
//     console.log(calculate(5,2, "abs"));

// task 4
const employees = [
  { nume: "Jamil", salary: 50000, department: "TI" },
  { nume: "Jale", salary: 60000, department: "HR" },
  { nume: "Baayram", salary: 55000, department: "TI" },
  { nume: "sahil", salary: 75000, department: "HR" },
  { nume: "Mayam", salary: 65000, department: "TI" },
  { nume: "Elara", salary: 80000, department: "HR" },
  { nume: "Davud", salary: 70000, department: "TI" },
];
function filterempoyess(arry) {
  let newarry = [];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i].salary >= 60000) { newarry.push(arry[i])};
  }
  return newarry;
}
console.log(filterempoyess(employees));
