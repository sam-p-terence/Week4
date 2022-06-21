


function findOutlier(arr) {
    var odds = arr.filter(function (number) {
    return !!(number % 2)
  });

  var evens = arr.filter(function (number) {
    return !(number % 2)
  });

  var result = (odds.length < evens.length) ? odds.pop() : evens.pop();

  return result;
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))





// function findOutlier(integers) {
//     let evens = []
//     let odds = []

//     for (let i = 0; i < integers.length; i++) {
//         let num = integers[i]

//         if (num % 2 === 0) {
//             evens.push(num)
//         } else {
//             odds.push(num)
//         }
//     }

//     if (evens.length === 1) {
//         return evens[0]
//     } else {
//         return odds[0]
//     }
// }

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))


// with ternaries
// function findOutlier(integers) {
//     let evens = []
//     let odds = []
//     integers.forEach(e => e % 2 === 0 ? evens.push(e) : odds.push(e))
//     return odds.length === 1 ? odds[0] : evens[0]
//   }
  

