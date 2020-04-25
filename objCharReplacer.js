
/*****************Read This**********************
This is more of challenge for myself to get more farmiliar with manipulating object and arrays
If I had a "problem" I had to create a function, or have them work together to do what I need it to
do. Could become a component or own thing in the future,
*/




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
const morseNumbsrAndSymbs = [ 
'0',     
'-----', 
'1',     
'.----', 
'2',     
'..---', 
'3',     
'...--', 
'4',     
'....-', 
'5',     
'.....' ,
 '6', 
 '-....', 
 '7', 
 '--...', 
 '8', 
 '---..', 
 '9', 
 '----.', 
 '.',
'.-.-.-',
',',
'--..--',
'?',
'..--..',
"'",
'.----.',
'!',
'-.-.--',
'/', 
'-..-.',
'(',
'-.--.',
')',
'-.--.-',
'&',
'.-...',
':',
'---...',
';',
'-.-.-.',
'=',
'-...-' ,
'+',
'.-.-.',
'-',
'-....-',
'_',
'..--.-',
'"',
'.-..-.',
'$',
'...-..-',
'@',
'.--.-.',
'¿', 
'..-.-', 
'¡', 
'--...-' ];

const morseNumbsrAndSymbsObj =   { '0': '-----',
'1': '.----',
'2': '..---',
'3': '...--',
'4': '....-',
'5': '.....',
'6': '-....',
'7': '--...',
'8': '---..',
'9': '----.',
'.': '.-.-.-',
',': '--..--',
'?': '..--..',
'\'': '.----.',
'!': '-.-.--',
'/': '-..-.',
'(': '-.--.',
')': '-.--.-',
'&': '.-...',
':': '---...',
';': '-.-.-.',
'=': '-...-',
'+': '.-.-.',
'-': '-....-',
_: '..--.-',
'"': '.-..-.',
'$': '...-..-',
'@': '.--.-.',
'¿': '..-.-',
'¡': '--...-' }

const objMaker = (keys, values) => {
    let result = {};
    keys.forEach((keys, i ) => result[keys] = values[i]);
    console.log(result)
    return result

}
//if there is an array, where the key values have a 1, 2 pattern
const arrToObj = (arr) => {
    let aKeys = [];
    let aValues = [];
    //take arr
    for (let i = 0; i < arr.length; i++) {
        let element = arr.indexOf(arr[i])
        console.log(element)
        
        // let evenCheck = element % 2===0;
        // console.log(evenCheck)
        function evenCheck(idx, arr){
            // console.log(idx)
            return(idx % 2 === 0 ? aKeys.push(arr[idx]) : aValues.push(arr[idx]))}
            evenCheck(element, arr)
        }

        console.log(aKeys)
        console.log(aValues)
        // console.log(charReplacer(objMaker(aKeys,aValues))
        //push to two arrays
    }

        

//This version works on objects with strings
const charReplacer = (obj, find, replace) => {
    //if it's an Array(fairly single use...)

    //split object's keys/ values, store in arrays
    let objKeys = Object.keys(obj);
    let objValues = Object.values(obj);
    console.log(objKeys)
    console.log(objValues)
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
    // console.log(charModdedArr)
    // return charMod
    objMaker(objKeys,charModdedArr)

}
// console.log(charReplacer(morseCode));
// console.log(charReplacer(morseCode,"*",short));
// console.log(arrToObj(morseNumbsrAndSymbs))
console.log(charReplacer( morseNumbsrAndSymbsObj,".",short));

