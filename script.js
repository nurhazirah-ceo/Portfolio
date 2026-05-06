const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function openImage(img) {
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImage");

  popup.style.display = "flex";
  popupImg.src = img.src;
}

function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeImage();
  }
});

const ebantuanImages = [
  "assets/images/ebantuan-preview.jpg",
  "assets/images/admin-dashboard-main.png",
  "assets/images/student-application-status.png",
  "assets/images/student-application-form.png",
  "assets/images/donor-dashboard.png",
  "assets/images/donation-target-dashboard.png",
  "assets/images/jenis-bantuan.jpg"

];

let currentEbantuanIndex = 0;

function showSlide(index) {
  const slide = document.getElementById("ebantuanSlide");
  const dots = document.querySelectorAll(".dot");

  if (!slide) return;

  currentEbantuanIndex = index;

  if (currentEbantuanIndex >= ebantuanImages.length) {
    currentEbantuanIndex = 0;
  }

  if (currentEbantuanIndex < 0) {
    currentEbantuanIndex = ebantuanImages.length - 1;
  }

  slide.src = ebantuanImages[currentEbantuanIndex];

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentEbantuanIndex].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentEbantuanIndex + direction);
}

function currentSlide(index) {
  showSlide(index);
}