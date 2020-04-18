
//Swap out the asterisk characters within the objs values *DONE*
//make the function reusable
//  Takes three parameters, subject-to-be-worked-on, find, replace
//Morse Code cipher
//ASCII Alternative 
const short = "•"
const long = "–"
const morseCode = {
  A: "*-",
  B: "-***",
  C: "-*-*",
  D: "-**",
  E: "*",
  F: "**-*",
  G: "--*",
  H: "****",
  I: "**",
  J: "*---",
  K: "-*-",
  L: "*-**",
  M: "--",
  N: "-*",
  O: "---",
  P: "*--*",
  Q: "--*-",
  R: "*-*",
  S: "***",
  T: "-",
  U: "**-",
  V: "***-",
  W: "*--",
  X: "-**-",
  Y: "-*--",
  Z: "--**",
  " ": "/",
};

// const charReplacer = (obj) => {
//     //split object's keys/ values, store in arrays
//     let objKeys = Object.keys(obj);
//     let objValues = Object.values(obj);
//     //empty array for new arrays
//     let charModdedArr = [];
//     console.log(charModdedArr)
//     //iterate through keys, not were working with strings
//     for(let i = 0;i < objValues.length; i++){
//         let wordCheck = objValues[i];
//         let wordHolder = "";
//     //iterate through a given obj's String
//         for(let j = 0; j < wordCheck.length; j++){
//             let char = wordCheck.charAt(j)
//             //char - create new words
//                 //when it's equal in length to wordCheck
                
//                 // console.log(wordHolder)
//                                     //if a target char is match concat replacment
//             if(char === "*"){
//                 wordHolder += short;
//             }else{
//                 wordHolder += char;
//             }
//                 if(wordHolder.length === wordCheck.length){
//                     charModdedArr.push(wordHolder)
//                 }
//                 //push to array
//         }
//     }
//     console.log(charModdedArr)
//     // return charMod
// }
// console.log(charReplacer(morseCode));

//function to make the two arr's in to an obj



const objMaker = (keys, values) => {
    let result = {};
    keys.forEach((key, i ) => result[key] = values[i]);
    console.log(result)
}

//This version works on objects with strings
const charReplacer = (obj, find, replace) => {
    //split object's keys/ values, store in arrays
    let objKeys = Object.keys(obj);
    let objValues = Object.values(obj);
    find.toString();
    replace.toString()
    //empty array for new arrays
    let charModdedArr = [];
    console.log(charModdedArr)
    //iterate through keys, not were working with strings
    for(let i = 0;i < objValues.length; i++){
        let wordCheck = objValues[i];
        let wordHolder = "";
    //iterate through a given obj's String
        for(let j = 0; j < wordCheck.length; j++){
            let char = wordCheck.charAt(j)
            //char - create new words
                //when it's equal in length to wordCheck
                
                // console.log(wordHolder)
                                    //if a target char is match concat replacment
            if(char === find){
                wordHolder += replace;
            }else{
                wordHolder += char;
            }
                if(wordHolder.length === wordCheck.length){
                    charModdedArr.push(wordHolder)
                }
                //push to array
        }
    }
    console.log(charModdedArr)
    // return charMod
    objMaker(objKeys,charModdedArr)

}
// console.log(charReplacer(morseCode));
console.log(charReplacer(morseCode,"*",short));

