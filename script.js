console.log("script loaded");
document.addEventListener("DOMContentLoaded", () => {
    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
});

function showMessage() {
    alert("Thank you for showing interest in joining She Can Foundation!");
}
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + '+';

        }

    };

    updateCounter();

});
const menuToggle =
    document.getElementById('menu-toggle');

const nav =
    document.querySelector('nav');

menuToggle.addEventListener('click', () => {

    nav.classList.toggle('active');

});
const text =
    "Together We Create Change";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.querySelector('.typing-text')
            .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    }

}

typeEffect();

window.addEventListener('scroll', () => {

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById('progress-bar')
        .style.width = progress + '%';

});
const reveals =
    document.querySelectorAll(
        '.card,.stat-box,.gallery-grid img,.testimonial-box,.contact-box,.vision-box'
    );

window.addEventListener('scroll', revealSection);

function revealSection() {

    for (let i = 0; i < reveals.length; i++) {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            reveals[i].getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            reveals[i].classList.add('active');

        }

    }

}





const hoverElements = document.querySelectorAll(
    ".card, .stat-box, .vision-box, .mission-text, .about-image img"
);

hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-glow").style.transform =
            "translate(-50%, -50%) scale(1.6)";
    });

    el.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-glow").style.transform =
            "translate(-50%, -50%) scale(1)";
    });
});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "none";
    });
});