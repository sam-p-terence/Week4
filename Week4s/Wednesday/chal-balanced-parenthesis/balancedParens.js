// // Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// // Write your solution below:

const isBalanced = (str) => {
    let map = {")":"(","}":"{","]":"["}
      let arr = []
      for(let i=0;i<str.length;i++){
        if(Object.keys(map).includes(str[0])){
          return false
        }
        if(Object.values(map).includes(str[i])){
          arr.push(str[i])
        }
        else if(Object.keys(map).includes(str[i])){
          if(arr[arr.length-1]===map[str[i]]){
            arr.pop()
          }
        }
      }
      return !arr.length
    
    }
    
    
    console.log(isBalanced(sample1))
    console.log(isBalanced(sample2))
    console.log(isBalanced(sample3))
    console.log(isBalanced(sample4))