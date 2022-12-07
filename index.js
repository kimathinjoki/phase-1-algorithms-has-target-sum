/* First method*/

// function hasTargetSum(array,target){
//   for(let i=0;i<array.length;i++){
//     const number = target -array[i]
//     for(let b =i+1;b<array.length; b++){
//       if(number === array[b])return true
//     }
//   }
//   return false

// }

/*
  Write the Big O time complexity of your function here
  the big O time complexity is O(n*n)
*/

/*
  Add your pseudocode here
  take each number in the arrayby iterating
  add each number to an iterration of the array
  do a comaprison with the ttarget value
*/

/*Alternative code*/
function hasTargetSum(array,target){
  for(let i= 0; i<array.length;i++){
      let num = array[i]

      for(let b= i+1; b<array.length;b++){
          if((num+array[b])=== target) return true

      }
  }
  return false

}
/*
  Add written explanation of your solution here
  the code iterates through the array taking each number and adding the other numbers of the array comparing it to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
