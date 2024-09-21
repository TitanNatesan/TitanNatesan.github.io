const $card = document.querySelector('.card');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x ** 4 + center.y ** 4);

  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #00000055
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader-wrapper");

  window.addEventListener("load", function () {
    // Hide the loader after the page is fully loaded
    loader.style.display = "none";
  });
});

function gotopage(url) {
  window.location.href = url;
}

var i = 0;
var txt = ", also known as <b>Titan</b> Natesan or Titan Dev, a Full Stack <b>Developer</b> based in Tiruppur. As an <b>AI enthusiast</b>, I specialize in developing robust <b>web applications</b> using Python, <b>Django</b>, and modern technologies. If you're looking for Titan the developer to craft innovative solutions, you’re in the right place!!";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tw").innerHTML = 'Hi, I’m <b>Natesan K</b>' + txt.substring(0, i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Trigger typeWriter when the page is loaded
window.onload = function () {
  setTimeout(function () {
    typeWriter();
  }, 500); // 1000 milliseconds (1 second) delay
};

const texts = [
  window.innerWidth>600?"Backend Developer":"Backend Dev",
  "Freelancer",
  "AI Enthusiast",
  "AI/ML Engineer",
];

var textWrapper = document.querySelector('.ml12');
var previousIndex = -1;

function updateText() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * texts.length);
  } while (newIndex === previousIndex);

  previousIndex = newIndex;
  textWrapper.textContent = texts[newIndex];
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false }) // Not looping this animation as it's triggered by setInterval
    .add({
      targets: '.ml12 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.ml12 .letter',
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
}

updateText(); // Initialize the first text and animation

// Update text every 4 seconds (to match the animation loop duration)
setInterval(updateText, 4000);
