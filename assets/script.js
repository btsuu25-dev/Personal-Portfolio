//1. Lấy tất cả link và section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-bar ul li a");

// Khi cuộn trang
window.onscroll = () => {
  let current = "";

  // Xác định section hiện tại
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // trừ đi khoảng header
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // Xóa active cũ, thêm active mới
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};


/*2.Làm cho chữ chạy */
   var typed = new Typed(".multiple-text",{
   strings: ["Web Developer" , "Frontend Developer"],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
  loop:true
 });

/*3. lamf chuyener ảnh*/
const slidesContainer = document.querySelector('.inner_image .slides');
const slides = document.querySelectorAll('.inner_image .slides img');
const prevBtn = document.querySelector('.inner_image .prev');
const nextBtn = document.querySelector('.inner_image .next');

let index = 0;

function showSlide() {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  if (index >= slides.length) index = 0;
  showSlide();
});

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide();
});
/* làm cho có thể bấm quá*/ 
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//responesve breakpoints
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }
});
//Cuộn lên đầu
const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });