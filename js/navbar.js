/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.getElementById("navMenu");


if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("mobile-active");

    });

}