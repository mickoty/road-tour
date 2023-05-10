// ********** set date ************
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");


const links2 = document.querySelectorAll(".footer-links");
console.log(links2);


links2.forEach((links) =>
  links.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("scroll-link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })
);

document.querySelector(".hero-btn").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector("#feature").scrollIntoView({ behavior: "smooth" });
});

const fotter= document.querySelectorAll('.footer-icon')
fotter.forEach(li => li.addEventListener('click', function(e){
  e.preventDefault()
}))