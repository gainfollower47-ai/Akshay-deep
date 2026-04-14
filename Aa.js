const particles = document.querySelector(".particles");

for (let i = 0; i < 40; i++) {
  let span = document.createElement("span");

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (Math.random() * 5 + 5) + "s";

  particles.appendChild(span);
}
