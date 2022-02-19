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

var burgerstatus = document.querySelector("[data-burger-state]");
console.log("the burgerstatus data set variable is: ", burgerstatus);




