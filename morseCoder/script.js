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

const container = document.querySelector(".container");
const form = document.querySelector("#form");
// const wordBox = document.querySelector("#morseC");
// const formContainer = document.querySelector(".form-container");
const formContainer = container.children;
const wordBox = document.querySelector(".input-box");
const btn = form.lastElementChild;

// ***********Tab Selection ********************
const tabContainer = document.querySelector(".tab-container");
const tabs = document.querySelectorAll(".tabs");
const mTab = document.querySelector("#morseTab");
const brTab = document.querySelector("#braileTab");
const biTab = document.querySelector("#binaryTab");
const sTab = document.querySelector("#savedTab");



// ***********Morse Code Output box********************
const output = document.querySelector("#morse-output");
// const output = document.querySelector("#braile-output");
// const output = document.querySelector("#binary-output");
// const output = document.querySelector("#savedEntries");

//********* Created Entries **********
const rsltBox = document.createElement("div");
const resulttext = document.createElement("p");
let finalResult = "";
output.appendChild(rsltBox);

//          TODO - TAB SELECTION(using event capturing)
// *********** Tab Selection Function********************
// This event sets default settings for site/app
//for now, when a uer logs in have morse be the selected option
//register what has been clicked to maintain a sense of state

/*
  tabs have the following ID
  morseTab
  braileTab
  binaryTab
  savedTab
  ******tab appears 4x
  content have the following ID
  morseForm
  braileForm
  binaryForm
  savedEntries
  ******form appears 3x, then savedEntries

  take selected tab
    -splice the string of the word tab
    -pass as parameter for regex
    -with other 
  remove tab part of string
  use it to match content ID's
  if there is a match, show content-
  and hide the ones that don't match
  
  */
//All elements with formContainer should be set to hidden by default
window.onload  = (e) =>  {
  formContainer[1].style.display = "flex";
  tabContainer.children[0].style.backgroundColor = "lightGray";
}
tabContainer.addEventListener('click', selectedTab)

  function selectedTab(e){
    //variables to be used
    let numberOfTabs = tabContainer.children.length;
    let contentQty = container.children.length;
    console.log("This is what has been clicked")
    console.log(e.target)
    //make into Regex
    const tabMatch = new RegExp(`${e.target.innerText}`, 'gi')
    console.log("The  regex, that has been extracted via innerText.")
    console.log(tabMatch)

// Hide all elements
    for(let i = 0; i < contentQty; ++i ){
      if(formContainer[i].className.match(/form/gi)){
        formContainer[i].style.display = 'none';
        tabContainer.children[i-1].style.backgroundColor = "gray";
      }
  }

 // Show the element match
    for(let i = 0; i < contentQty; ++i){
      //loop through container
      //only log elements with form id
      if(formContainer[i].id.match(tabMatch)){
        formContainer[i].style.display = "flex";
        (tabContainer.children[i-1]).style.backgroundColor = "lightGray";
      }
    };
  };
  /* 
  corresponding data 
  scaning withing containers
  click events
  */ 
//***********Morse Code Cipher***************
const short = "•";
const long = "–";


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
//have this read 
' ': '/',
'0': '-----',
'1': '•----',
'2': '••---',
'3': '•••--',
'4': '••••-',
'5': '•••••',
'6': '-••••',
'7': '--•••',
'8': '---••',
'9': '----•',
'.': '•-•-•-',
',': '--••--',
'?': '••--••',
'\'': '•----•',
'!': '-•-•--',
'/': '-••-•',
'(': '-•--•',
')': '-•--•-',
'&': '•-•••',
':': '---•••',
';': '-•-•-•',
'=': '-•••-',
'+': '•-•-•',
'-': '-••••-',
'_': '••--•-',
'"': '•-••-•',
'$': '•••-••-',
'@': '•--•-•',
'¿': '••-•-',
'¡': '--•••-' 
};


// expand so it's reusable
const replaceCharAll = (obj) => {
  for(let key in obj){
    console.log(key.value().key())
  }
};
//take str
const morseCoder = (e) => {
  e.preventDefault();
  rsltBox.textContent = "";
  let word = wordBox.value;
  let result = [];
  let chars = word.toUpperCase().split("");
  for (let i = 0; i < chars.length; i++) {
    result.push(morseCode[chars[i]]);
  };
  let morseResult = result.join(" ");
  finalResult = document.createTextNode(morseResult);
  // rsltBox.append(short);
  // rsltBox.append(long);
  output.firstChild.style.fontSize = "x-large"
  output.firstChild.style.color = "#FF8D24"
  rsltBox.append(finalResult);
  wordBox.textContent = "";
};


//Event Listners
btn.addEventListener("click", morseCoder);
