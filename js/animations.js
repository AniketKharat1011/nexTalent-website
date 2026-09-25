/* =========================================================
   SIMPLE SCROLL ANIMATIONS
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".pillar-card, .course-card, .job-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "all 0.6s ease";

    observer.observe(element);

});