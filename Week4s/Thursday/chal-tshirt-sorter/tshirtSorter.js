// Write your solution below:

// let letters = ['s', 'l', 'm', 'l', 's', 'm'];
// let s = 1
// let m = 2
// let l = 3
// letters.sort((a, b, c) => {
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// console.log(letters);


// function sortShirts(unsortedShirtsString) {
//     const smallArr = []
//     const mediumArr =[]
//     const largeArr= []

//     for (let i = 0; i < unsortedShirtsString; i++) {
//         const currentShirt = unsortedShirtsString(i)

//         if (currentShirt === 'l') {
//             largeArr.push('l')
//         } else if (currentShirt === 'm') {
//             mediumArr.push('m')
//         } else if (currentShirt === 's') {
//             smallArr.push('s')
//         }
//     }
//     return smallArr.join('') + mediumArr.join('') + largeArr.join('')
// }

// console.log('slsmlsmsmslmslmslmslm')
// console.log('lmsmlsml')


// Solution 1:
// function tshirtSorter(str) {
//     let small = ""
//     let medium = ""
//     let large = ""
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "s") {
//         small += "s"
//       } else if (str[i] === "m") {
//         medium += "m"
//       } else {
//         large += "l"
//       }
//     }
//     return small + medium + large
//   }
  
  // Solution 2:
  function tshirtSorter('slmlmsmlms') {
    return str.split("").sort().reverse().join("")
  }
  console.log(tshirtSorter)
    // splits the string into a array of characters
    // sorts the array (alphabetically automatiically)
    // reverses the now sorted array (which happens to give us the order we need)
    // rejoins the elements into a single string