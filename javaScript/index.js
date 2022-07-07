const links = document.querySelector(".nav__links");
const menus = document.querySelector(".menu");
const btn = document.querySelector(".close__btn");
const Nav = document.querySelector("nav");
const imgs = document.querySelectorAll(".small__col img");
const main = document.querySelector("#mainImg");
const click = document.querySelector(".product__img")

// MENU BUTTON

menus.addEventListener("click", function () {
  links.style.display = "block";
});

btn.addEventListener("click", function () {
  links.style.display = "none";
});


// WHEN CLICKED IT TAKES ME TO THE LOCATION OF THIS
click.addEventListener("click", function(){
       window.location.href='product.html'
})

// PRODUCT PAGE

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    const imagesrc = img.src;
    main.src = imagesrc;
  });
});

// Window.addEventListener("scroll" ,function() {
//       documentquerySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
//       Nav.style.color = "yellow"
// })
