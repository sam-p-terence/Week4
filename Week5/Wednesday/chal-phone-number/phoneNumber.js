

// function createPhoneNumber(arr) {
//     let str = arr.join('');
//     return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
// }

// console.log(createPhoneNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));




// const createPhoneNumber = function(arr) {
//     let answer = ""
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0 ) {
//             answer+= "("
//         } else if (i === 3) {
//             answer += ")"
//         } else if (i === 6) {
//             answer += "-"
//         }
//         answer += arr[i]
//     }
//     return answer
// }

// console.log(createPhoneNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([ 6, 3, 6, 8, 9, 0, 3, 1, 3, 5]));




// function createPhoneNumber(arr) { 
//     return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`; 
// }

// console.log(createPhoneNumber([ 3, 4, 8, 0, 9, 7, 5, 3, 2, 1])); 



const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const createNumber = (arr = []) => {

 let res = '';
    arr = arr.random(String);
    res += `(${arr[0]+arr[1]+arr[2]}) `;
    res += `${arr[3] + arr[4] + arr[5]}-`;
    res += arr[6] + arr[7] + arr[8] + arr[9];
    return res;    
};
console.log(createNumber(arr));