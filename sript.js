/* =========================
   TYPING ANIMATION
========================= */

const words = [
  "Junior Accountant",
  "ACCA Student",
  "Xero Specialist",
  "Video Editor"
];

let i = 0;
let j = 0;
let deleting = false;

const typingEl = document.querySelector(".typing");

function typeEffect() {
  const word = words[i];

  if (!deleting) {
    j++;
  } else {
    j--;
  }

  typingEl.textContent = word.substring(0, j);

  // pause at full word
  if (!deleting && j === word.length) {
    deleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  // move to next word
  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();


/* =========================
   SCROLL REVEAL (SMOOTH)
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((el) => observer.observe(el));


/* =========================
   IMAGE ANIMATION SAFETY
   (ensures no flicker issues)
========================= */

const heroImage = document.querySelector(".reveal-image");

if (heroImage) {
  // forces smooth GPU rendering
  heroImage.style.willChange = "transform, opacity";
}
