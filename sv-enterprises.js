
const navMenu = document.querySelector('.nav-menu');
const toggle = document.querySelector(".toggle")

toggle.addEventListener('click', function () {
    navMenu.classList.toggle('mobile-nav')
});

document.getElementById("year").textContent = new Date().getFullYear();

const mainPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link => {

    if (link.getAttribute("href") === mainPage) {
        link.classList.add("active");
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const navTop = document.querySelector('.nav-top');
    const navMiddle = document.querySelector('.nav-middle');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 150) {
            navTop.classList.add('nav-hide');
            navMiddle.classList.add('scoll-nav');
        } else {
            navTop.classList.remove('nav-hide');
            navMiddle.classList.remove('scoll-nav');
        }
    });
});

const slideSwiper = new Swiper(".slide-swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: false,
    breakpoints: {
        1400: {
            slidesPerView: 5
        },
        1000: {
            slidesPerView: 4
        },
        500: {
            slidesPerView: 3
        },
        0: {
            slidesPerView: 1
        }
    },
});

const brandSwiper = new Swiper(".brandSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: { slidesPerView: 5 },
        1200: { slidesPerView: 4 },
        900: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
    }
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });

});

const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

videoModal.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget;
    const videoSrc = trigger.getAttribute('data-video');

    modalVideo.src = videoSrc;
    modalVideo.play();
});

videoModal.addEventListener('hidden.bs.modal', function () {
    modalVideo.pause();
    modalVideo.src = "";
});