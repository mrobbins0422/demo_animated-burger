console.log('javascript file has loaded');

/* var trigger = document.getElementById("js-toggle");
console.log("trigger= ", trigger);

var burgerstate = document.querySelector(".burger");
console.log("the burgerstate query variable is: ", burgerstate); */

var burgerstatus = document.querySelector("[data-burger-state]");
console.log("the burgerstatus data set variable is: ", burgerstatus);

var status = burgerstatus.dataset.burgerState;
burgerstatus.dataset.burgerState = 'menu-on';

var burgerstatus = document.querySelector("[data-burger-state]");
console.log("the burgerstatus data set variable is: ", burgerstatus);




/* var burgerstate = document.querySelector(".burger");
console.log("the burgerstate query variable is: ", burgerstate); 
console.log("a querySelector on element class name") */

/* var burgerstate = document.querySelector("[data-burger-state]");
console.log("the burgerstate data set variable is: ", burgerstate);
console.log('this returns the entire div'); */

/* this method returns a NamedNodeMap which I don't know how to access yet */
/* ------ i need to research this more ------ */
/* var burgerdata = burgerstate.attributes;
console.log("the burgerstate data is: ", burgerdata); */

/* console.log('gonna try to get just the data');
console.log(document.dataset.burgerState); */

/* this method returns ? which is the same format as a querySelector */
/* now I should be able to get this working with a querySelector to the data 
attribute */
/* var test = document.getElementById('test');
console.log("the value of the test variable is: ", test); */

/* var burgerstate = document.querySelector("[data-burger-state]");
console.log(burgerstate.dataset.burgerState);
console.log("Eureka! This returns what I want!"); */

/* document.addEventListener("click", e => {
  var currentstate = document.querySelector("[data-burger-state]");
  console.log("currentstate is: ", currentstate);
  var currentstatedata = currentstate.dataset.burgerState;
  console.log("currentstatedata is: ", currentstatedata);

  if (currentstatedata = "menu-off") {
    currentstate.dataset.burgerState = "menu-on";
    console.log("after click if the menu was off, currentstate: ", currentstate);
    console.log(currentstate.dataset.burgerState);
    console.log(document.querySelector("[data-burger-state]"));
  } 

}) */

/* let value = document.querySelector("[data-burger-state]").getAttribute("data-burger-state");
console.log("the attribute of burgerState is: ", value); */

