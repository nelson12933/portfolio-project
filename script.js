// Animate skill bars when Skills section scrolls into view

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const skillBars = document.querySelectorAll(".skill-bar-fill");

  function animateSkills() {
    const rect = skillsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.8) {
      skillBars.forEach((bar) => {
        const level = bar.getAttribute("data-skill-level");
        bar.style.width = level + "%";
      });
      // Remove scroll event after animation triggered once
      window.removeEventListener("scroll", animateSkills);
    }
  }

  window.addEventListener("scroll", animateSkills);

  // In case the section is already visible on load
  animateSkills();
});
// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('active');
});
