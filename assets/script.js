const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Constants 
const arrowbtnleft = document.querySelector(".arrow_left");
const arrowbtnright = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const lastSlide = slides.length - 1; // last slide checker
const imageSlide = document.querySelector(".banner-img");
const baseURL = "./assets/images/slideshow/";
const tagLine = document.querySelector("#banner p"); 

let slidecourant = 0;

// Add event listeners to the arrows
arrowbtnleft.addEventListener('click', () => {
    if (slidecourant === 0) {
        slidecourant = lastSlide;
    } else {
        slidecourant--;
    }
    updateSlide(slidecourant);
});

arrowbtnright.addEventListener('click', () => {
    if (slidecourant === lastSlide) {
        slidecourant = 0;
    } else {
        slidecourant++;
    }
    updateSlide(slidecourant);
});

// Create a bullet point for each slide and add event listeners
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected'); // Mark the first dot as active
    }
    dot.addEventListener('click', () => {
        updateSlide(index);
    });
    dotsContainer.appendChild(dot);
});

// Function to update the slide
function updateSlide(index) {
    imageSlide.src = `${baseURL}${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;

    // Update active dot
    const currentDot = dotsContainer.querySelector('.dot_selected');
    if (currentDot) {
        currentDot.classList.remove('dot_selected');
    }
    dotsContainer.children[index].classList.add('dot_selected');
}


// Initialize the first slide
updateSlide(slidecourant);

