/* *****Morse Code section of Petzold Code******
inspiration seen
take from morsecode.world
 -could use an animaton library(animejs)
 -sound based on values in output
 -output occur with keyup events,"real time"
 */

 // ****************** Refactoring Notes ***********************
 //personal note, refactor when it becomee unclear, or when the it's easier to 
 //change before putting in a new feature

//  ****************************************
 //Try making a separate script for the tab selection
 //break up the function of each tab
 //have saved function be a separate script 

 //DOM elements

// ***********Morse Code Form Elements*******************
const containter = document.querySelector(".container");
const form = document.querySelector("#form");
// const wordBox = document.querySelector("#morseC");
const wordBox = document.querySelector(".input-box");
const btn = form.lastElementChild;

// ***********Morse Code Output tabs********************
const tabs = document.querySelectorAll(".tabs");
const mTab = document.querySelector("#morseTab");
const brTab = document.querySelector("#morseTab");
const biTab = document.querySelector("#morseTab");
const sTab = document.querySelector("#morseTab");
// ***********Morse Code Output box********************
const output = document.querySelector("#m-output");
const rsltBox = document.createElement("div");
const resulttext = document.createElement("p");
let finalResult = "";
// finalResult.style.verticleAlign("middle");
finalResult.style.color = "red";

// This event sets default settings for site/app
//for now, when a uer logs in have morse be the selected option
window.addEventListener('load', (e) => {
  mTab.style.backgroundColor = "lightGray";
  console.log("Hello")
})

// click and change the background color of a selected tab
//change switch the color

output.appendChild(rsltBox);

//works

// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log(wordBox.value)
// })
// btn.addEventListener("click", (e) => {
//     alert("smbt")
// })

//function that will take a set of letters translate it into morsecode
//Morse Code cipher
//ASCII Alternative 
const short = "•"
const long = "–"
const morseCode = {
A: '•-',
B: '-•••',
C: '-•-•',
D: '-••',
E: '•',
F: '••-•',
G: '--•',
H: '••••',
I: '••',
J: '•---',
K: '-•-',
L: '•-••',
M: '--',
N: '-•',
O: '---',
P: '•--•',
Q: '--•-',
R: '•-•',
S: '•••',
T: '-',
U: '••-',
V: '•••-',
W: '•--',
X: '-••-',
Y: '-•--',
Z: '--••',
' ': '/' }
/*
Create a function that will take create an object and append to morseCode
0	-----	1	.----	2	..---	3	...--	4	....-	5	.....
6	-....	7	--...	8	---..	9	----.
.	.-.-.-	,	--..--	?	..--..	'	.----.	!	-.-.--	/	-..-.
(	-.--.	)	-.--.-	&	.-...	:	---...	;	-.-.-.	=	-...-
+	.-.-.	-	-....-	_	..--.-	"	.-..-.	$	...-..-	@	.--.-.
¿	..-.-	¡	--...-
*/

// expand so it's reusable
const replaceCharAll = (obj) => {
  for(let key in obj){
    console.log(key.value().key())
  }
}
//take str
const morseCoder = (e) => {
  e.preventDefault();
  rsltBox.textContent = "";
  let word = wordBox.value;
  let result = [];
  let chars = word.toUpperCase().split("");
  for (let i = 0; i < chars.length; i++) {
    result.push(morseCode[chars[i]]);
  }
  let morseResult = result.join("");
  finalResult = document.createTextNode(morseResult);
  // rsltBox.append(short);
  // rsltBox.append(long);
  rsltBox.append(finalResult);
  wordBox.textContent = "";
};
//Event Listners
btn.addEventListener("click", morseCoder);
//take apart string
//check if char matchs morsecode equivalent