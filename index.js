/* Enter the code to remove the main node element under this comment */

/* Create your new element here and assign it to newHeader */
var element = document.createElement('div')
element.appendChild(ul)
document.body.appendChild(element)


const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerText = "Steven is the champion!";
newHeader.className = "victory";
