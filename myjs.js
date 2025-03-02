document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    let slideInterval; // ตัวแปรเก็บ setInterval
    showSlides(slideIndex);
    startAutoSlide(); // เริ่มเปลี่ยนภาพอัตโนมัติ

    function plusSlides(n) {
        showSlides(slideIndex += n);
        resetAutoSlide(); // รีเซ็ตเวลาใหม่เมื่อผู้ใช้กดปุ่ม
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
        resetAutoSlide(); // รีเซ็ตเวลาใหม่เมื่อผู้ใช้กดปุ่ม
    }

    function showSlides(n) {
        let slides = document.querySelectorAll(`[class^="slidephoto"]`);
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activedot", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " activedot";
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            plusSlides(1);
        }, 5000); // เปลี่ยนรูปทุก 5 วินาที
    }

    function resetAutoSlide() {
        clearInterval(slideInterval); // หยุดการเปลี่ยนอัตโนมัติ
        startAutoSlide(); // เริ่มต้นใหม่หลังจากมีการกดปุ่ม
    }

    document.querySelector(".prev").addEventListener("click", function () {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        plusSlides(1);
    });

    let dotElements = document.querySelectorAll(".dot");
    dotElements.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentSlide(index + 1);
        });
    });

});