console.log('javascript file has loaded');

/* using data attribute selector */

const element = document.querySelector("[data-burger-state]");
console.log("the element is: ", element);

/* element.dataset.burgerState = "menu-off"; */
/* element.dataset.burgerState = "menu-on"; */

var burgerdata = element.dataset.burgerState;

element.addEventListener("click", function() {
  if (burgerdata == "menu-off") {
    console.log("the menu is off");
    element.dataset.burgerState = "menu-on";
  } else if (burgerdata == "menu-on") {
    console.log("the menu is on");
    element.dataset.burgerState = "menu-off";
  }
});

console.log(element);
console.log(burgerdata);


/* if (burgerstatedata == 'menu-off') {
  console.log('the menu is off'); 
} else if (burgerstatedata == 'menu-on') {
  console.log('the menu is on');
} */


/* burgerstate.dataset.burgerState = 'menu-on';
console.log(burgerstate); */
