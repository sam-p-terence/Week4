// Write your solution below:





// function find_unique_characters( string ){
//     var unique='';
//     for(var i=0; i<string.length; i++){
//         if(unique.indexOf(string[i])==-1){
//             unique += string[i];
//         }
//     }
//     return unique;
// }
// console.log(find_unique_characters('baraban'));





function removeDuplicateLetters(givenString) {
    let usedLetters = [];

    for (let i = 0; i < givenString.length; i++) {
        if (!usedLetters.includes(givenString[i])) {
        usedLetters.push(givenString[i])
        }
    }
    return usedLetters.join('')
}

console.log(removeDuplicateLetters('iwanttoclimbamountain'))





// const str = 'Aaaaaaaaabbbbbbbbbbbbbcdeeeeefggggg';

// const unique = [...new Set([...str])].join('');

// console.log(unique);






// const numbers = [d,e,g,s,e,d,q,s,z,x,f,e,q]

// console.log([...new Set(numbers)])