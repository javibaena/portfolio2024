
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});





/* nav */
/* const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')


navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links')
})

 */

/* menu contenido animacion lateral  */
const items = document.querySelectorAll('.list-item');

window.addEventListener('scroll', checkItems);

function checkItems() {
    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowPosition = window.innerHeight / 1.7;
        if (itemPosition < windowPosition) {
            item.classList.add('show');
        }
    });
}











var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  // disable previous & next buttons and dots
  prevNextButtons: false,
  pageDots: false
});


/* circle animation */
const text = document.querySelector('.text p');

text.innerHTML = text.innerText.split('').map(
  (char, i) =>
  `<span style= "transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('')