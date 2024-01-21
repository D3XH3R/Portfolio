let section = document.querySelectorAll(`section`);
let navLinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 100;
    let height = i.offsetHeight;
    let id = i.getAttribute(`id`);

    if (top >= offset && top < offset + height) {
      navLinks.forEach((e) => {
        e.classList.remove(`active`);
        document
          .querySelector(`header nav a[href*= ` + id + `]`)
          .classList.add(`active`);
      });
      i.classList.add("show-animation");
    } else {
      i.classList.remove(`show-animation`);
    }
  });
};

// show the navbar in the moblie

let show = document.querySelector(`header .icon`);
let navbar = document.querySelector(`nav`);

show.addEventListener(`click`, () => {
  navbar.classList.toggle(`show`);
});

let telegram = document.querySelector(`.tel`);

telegram.addEventListener(`click`, () => {
  alert("My Telegram Number:252672086310");
});
