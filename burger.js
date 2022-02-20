console.log('javascript file has loaded');

/* using ID selector
when creating IDs in HTML to be used by javascript,
I preface the variable name with 'js-'

var trigger = document.getElementById("js-toggle");
console.log("trigger= ", trigger); 
*/

/* using Class selector

var burgerstate = document.querySelector(".burger");
console.log("the burgerstate query variable is: ", burgerstate); 
*/

/* using data attribute selector */

var burgerstatus = document.querySelector("[data-burger-state]");
console.log("the burgerstatus data set variable is: ", burgerstatus);

var status = burgerstatus.dataset.burgerState;
burgerstatus.dataset.burgerState = 'menu-on';
burgerstatus.dataset.burgerState = "menu-off";

var burgerstatus = document.querySelector("[data-burger-state]");
console.log("the burgerstatus data set variable is: ", burgerstatus);


/* Using getAttribute and setAttribute */
/* var burgerstatus = document.querySelector("[data-burger-state]");
var getstatus = burgerstatus.getAttribute("data-burger-state");
burgerstatus.setAttribute("data-burger-state", "menuNew"); 
*/

/* Using the dataset Property
A simpler method of accessing data attributes is with the help of the dataset property. This property returns a DOMStringMap object with one entry for each custom data attribute. */

var burgerstatus = document.querySelector("[data-burger-state]");

var status = burgerstatus.dataset.burgerState;
burgerstatus.dataset.burgerState = "menu-test";
console.log("the burgerstatus data set variable is: ", burgerstatus);


