const { float, double } = require("webidl-conversions");

function sortArray(array) {
    // write your code here
    array.sort((a,b)=>(a-b));
    return array
  }
// console.log(sortArray([55 , 64 , 1 , 11 , 4]))
function sumTwoSmallestNums(arr) {
    arr.sort((a,b)=>(a-b));
    let sum = arr[0]+arr[1]
    return sum
}
// console.log(sumTwoSmallestNums([20,9,3,2]));

function cumulativeSum(arr) {
    let sum = 0;
    const result =[]
for (let i=0; i<arr.length; i++){
  sum += arr[i]
  result.push(sum)
}
return result
}
// console.log(cumulativeSum([1,-2,3]));

function squares(num) {
    return (Math.sqrt(num))
// return (Math.sqrt(num)).toFixed(2)
// return parseFloat(Math.sqrt(num))
}
// console.log(squares(4.0));
function cubes(num) {
    return (Math.cbrt(num))
}
// console.log(cubes(8));


function date_format(date) {
    // write your code here 
    // moment(date).format("DD-MM-YYYY");
  }
//   console.log(date_format("2020/1/1"));
//   "2020/1/1"
//   "2020/1/1 | 2020-1-1 | 1/1/2020"

// function binToOct(b) {
// 	// write your code here
//     const oct = (b).toString(8);  
//     // const bi = (oct).toString(2);  
//     const bi = parseInt(oct, 2);    
// 	return bi
// }
// console.log(binToOct("10011100"));
function b() {
  let re = " ";
  let result = ["red","green","blue","black"]
for (let i=0 ; i<result.length ; i++){
  if (result[i]!= "blue") {
   re += result[i] + " " 
  }
}
return re
}
console.log(b());