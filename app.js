gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav_item a");
const activeNav = document.querySelector(".active_nav");

links.forEach((link) => {
    link.addEventListener("click", () => {
        gsap.to(links, { color: "black" });
        if (document.activeElement === link) {
            gsap.to(link, { color: "red" });
            console.log(link);
        }
        moveActiveNav(link);
    });
});

function moveActiveNav(link) {
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
        duration: 1.25,
        absolute: true,
        ease: "elastic.out(1,.5)"
    });
}

// Cards handling
const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//     card.addEventListener("click", () => {
//         // Remove active class from all cards
//         cards.forEach((otherCard) => {
//             otherCard.classList.remove("active");
//         });
        
//         // Add active class to the clicked card
//         card.classList.add("active");
        
//         // Add is-inactive class to all other cards
//         cards.forEach((otherCard) => {
//             if (otherCard !== card) {
//                 otherCard.classList.add("is-inactive");
//             }
//         });
// var cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        cards.forEach((otherCard) => {
            otherCard.classList.remove("active");
            otherCard.classList.add("is-inactive");
        });
        
        // Add active class to the clicked card
        card.classList.add("active");
        
        // Remove is-inactive class from the clicked card
        card.classList.remove("is-inactive");
    });
});

