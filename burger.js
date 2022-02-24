console.log('javascript file has loaded');

const toggle = document.querySelector('[aria-expanded]');
console.log(toggle);

toggle.addEventListener('click', (e) => {
  let pressed = e.target.getAttribute('aria-expanded') === 'true';
  e.target.setAttribute('aria-expanded', String(!pressed));
  console.log(document.querySelector("[aria-expanded]"));;
});

