console.log('javascript file has loaded');

const navSlide = () => {
/*   const burger = document.querySelector(".burger"); */
  const burger = document.getElementById('js-navbar-toggle');
	console.log(burger);

  burger.addEventListener("click", () => {
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

