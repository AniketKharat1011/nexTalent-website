/* =========================================================
   NEX TALENT — COURSE DETAILS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("courseContainer");

    if (!container) {
        console.error("Course container not found.");
        return;
    }


    /* =====================================================
       GET COURSE FROM URL
       ===================================================== */

    const params = new URLSearchParams(
        window.location.search
    );

    const courseId = params.get("course");


    if (!courseId) {

        showCourseError(
            "No course selected.",
            "Please return to the Courses page and select a course."
        );

        return;
    }


    /* =====================================================
       GET COURSE DATA
       ===================================================== */

    let course = null;


    /*
       Your data/courses.js should contain the course
       objects. This supports several possible variable
       names so the page is more tolerant.
    */

    if (
        typeof courses !== "undefined" &&
        courses[courseId]
    ) {

        course = courses[courseId];

    }
    else if (
        typeof courseData !== "undefined" &&
        courseData[courseId]
    ) {

        course = courseData[courseId];

    }
    else if (
        typeof courseCatalog !== "undefined" &&
        courseCatalog[courseId]
    ) {

        course = courseCatalog[courseId];

    }
    else if (
        window.nexTalentCourses &&
        window.nexTalentCourses[courseId]
    ) {

        course = window.nexTalentCourses[courseId];

    }


    /* =====================================================
       COURSE NOT FOUND
       ===================================================== */

    if (!course) {

        console.error(
            "Course not found:",
            courseId
        );

        showCourseError(
            "Course not found.",
            "The course you are looking for does not exist or the course data could not be loaded."
        );

        return;
    }


    /* =====================================================
       RENDER COURSE
       ===================================================== */

    renderCourse(course, courseId);

});


/* =========================================================
   RENDER COURSE
   ========================================================= */

function renderCourse(course, courseId) {

    const container =
        document.getElementById(
            "courseContainer"
        );


    container.innerHTML = `

        <!-- =================================================
             COURSE HERO
             ================================================= -->

        <section class="course-hero">

            <div class="course-hero-inner">


                <div class="course-hero-content reveal">

                    <a
                        href="courses.html#courseLibrary"
                        class="course-back"
                    >
                        ← Back to Courses
                    </a>


                    <div class="course-category-badge">
                        ${safe(course.category)}
                    </div>


                    <h1>
                        ${safe(course.title)}
                    </h1>


                    <p class="course-description">
                        ${safe(course.description)}
                    </p>


                    <div class="course-meta-large">

                        <span>
                            ${safe(course.level)}
                        </span>

                        <span>
                            ${safe(course.duration)}
                        </span>

                        <span>
                            ${safe(course.lessons)}
                        </span>

                    </div>

                </div>



                <!-- =========================================
                     HERO VISUAL
                     ========================================= -->

                <div class="course-hero-visual reveal">

                    <div class="course-orbit one"></div>

                    <div class="course-orbit two"></div>


                    <div class="course-visual-core">

                        <strong>
                            ${getShortTitle(course.title)}
                        </strong>

                        <span>
                            NexTalent Course
                        </span>

                    </div>


                    <div class="visual-chip one">

                        <small>
                            Duration
                        </small>

                        <strong>
                            ${safe(course.duration)}
                        </strong>

                    </div>


                    <div class="visual-chip two">

                        <small>
                            Level
                        </small>

                        <strong>
                            ${safe(course.level)}
                        </strong>

                    </div>


                    <div class="visual-chip three">

                        <small>
                            Learning
                        </small>

                        <strong>
                            ${safe(course.lessons)}
                        </strong>

                    </div>

                </div>

            </div>

        </section>



        <!-- =================================================
             COURSE MAIN
             ================================================= -->

        <section class="course-main">

            <div class="course-main-inner">


                <!-- =========================================
                     LEFT CONTENT
                     ========================================= -->

                <div class="course-main-content">

                    <h2>
                        Build practical skills
                        that move you forward.
                    </h2>


                    <p>
                        This NexTalent course is designed to help
                        learners understand the fundamentals,
                        practice important concepts and apply
                        their knowledge through practical work.
                    </p>



                    <!-- =====================================
                         SKILLS
                         ===================================== -->

                    ${
                        renderSkills(
                            course.skills
                        )
                    }



                    <!-- =====================================
                         CURRICULUM
                         ===================================== -->

                    ${
                        renderCurriculum(
                            course.curriculum
                        )
                    }



                    <!-- =====================================
                         PROJECTS
                         ===================================== -->

                    ${
                        renderProjects(
                            course.projects
                        )
                    }



                    <!-- =====================================
                         AUDIENCE
                         ===================================== -->

                    ${
                        renderAudience(
                            course.audience
                        )
                    }



                    <!-- =====================================
                         COURSE INCLUDES
                         ===================================== -->

                    ${
                        renderIncludes(
                            course.includes
                        )
                    }

                </div>



                <!-- =========================================
                     SIDEBAR
                     ========================================= -->

                <aside class="course-sidebar">

                    <div class="enroll-card">

                        <div class="enroll-label">
                            Course Information
                        </div>


                        <h3>
                            ${safe(course.title)}
                        </h3>


                        <div class="price">

                            ${safe(
                                course.price ||
                                "Coming Soon"
                            )}

                        </div>


                        <a
                            href="contact.html?course=${encodeURIComponent(courseId)}"
                            class="enroll-button"
                        >
                            Enquire About This Course
                        </a>


                        <div class="sidebar-divider"></div>


                        <div class="quick-info">

                            <div class="quick-info-item">

                                <span>
                                    Category
                                </span>

                                <strong>
                                    ${safe(course.category)}
                                </strong>

                            </div>


                            <div class="quick-info-item">

                                <span>
                                    Level
                                </span>

                                <strong>
                                    ${safe(course.level)}
                                </strong>

                            </div>


                            <div class="quick-info-item">

                                <span>
                                    Duration
                                </span>

                                <strong>
                                    ${safe(course.duration)}
                                </strong>

                            </div>


                            <div class="quick-info-item">

                                <span>
                                    Lessons
                                </span>

                                <strong>
                                    ${safe(course.lessons)}
                                </strong>

                            </div>

                        </div>

                    </div>


                    <div class="career-note">

                        <strong>
                            Career-focused learning
                        </strong>

                        <p>
                            Build skills, practice concepts and
                            work toward applying your knowledge
                            in practical scenarios.
                        </p>

                    </div>

                </aside>

            </div>

        </section>



        <!-- =================================================
             CTA
             ================================================= -->

        <section class="course-cta">

            <div class="course-cta-card reveal">

                <h2>
                    Ready to build your
                    <span>next skill?</span>
                </h2>

                <p>
                    Connect with NexTalent to learn more about
                    this course, upcoming batches and learning
                    opportunities.
                </p>

                <a
                    href="contact.html?course=${encodeURIComponent(courseId)}"
                    class="course-cta-button"
                >
                    Talk to NexTalent →
                </a>

            </div>

        </section>

    `;


    /* =====================================================
       UPDATE PAGE TITLE
       ===================================================== */

    document.title =
        `${course.title} | NexTalent`;


    /* =====================================================
       ACTIVATE REVEAL
       ===================================================== */

    setTimeout(
        initializeReveal,
        50
    );

}



/* =========================================================
   SKILLS
   ========================================================= */

function renderSkills(skills) {

    if (
        !Array.isArray(skills) ||
        skills.length === 0
    ) {

        return "";

    }


    return `

        <section class="detail-section">

            <div class="detail-section-header">

                <span class="detail-number">
                    01
                </span>

                <h2>
                    Skills you'll build
                </h2>

            </div>


            <div class="skills-grid">

                ${skills.map(skill => `

                    <div class="skill-item">

                        ${safe(skill)}

                    </div>

                `).join("")}

            </div>

        </section>

    `;
}



/* =========================================================
   CURRICULUM
   ========================================================= */

function renderCurriculum(curriculum) {

    if (
        !Array.isArray(curriculum) ||
        curriculum.length === 0
    ) {

        return "";

    }


    return `

        <section class="detail-section">

            <div class="detail-section-header">

                <span class="detail-number">
                    02
                </span>

                <h2>
                    Course curriculum
                </h2>

            </div>


            <div class="curriculum-list">

                ${curriculum.map(
                    (item, index) => `

                    <div class="curriculum-item">

                        <div class="curriculum-number">

                            ${String(
                                index + 1
                            ).padStart(2, "0")}

                        </div>


                        <strong>
                            ${safe(item)}
                        </strong>

                    </div>

                `
                ).join("")}

            </div>

        </section>

    `;
}



/* =========================================================
   PROJECTS
   ========================================================= */

function renderProjects(projects) {

    if (
        !Array.isArray(projects) ||
        projects.length === 0
    ) {

        return "";

    }


    return `

        <section class="detail-section">

            <div class="detail-section-header">

                <span class="detail-number">
                    03
                </span>

                <h2>
                    Practical projects
                </h2>

            </div>


            <div class="projects-grid">

                ${projects.map(
                    (project, index) => `

                    <div class="project-card">

                        <span>
                            Project ${String(
                                index + 1
                            ).padStart(2, "0")}
                        </span>

                        <strong>
                            ${safe(project)}
                        </strong>

                    </div>

                `
                ).join("")}

            </div>

        </section>

    `;
}



/* =========================================================
   AUDIENCE
   ========================================================= */

function renderAudience(audience) {

    if (
        !Array.isArray(audience) ||
        audience.length === 0
    ) {

        return "";

    }


    return `

        <section class="detail-section">

            <div class="detail-section-header">

                <span class="detail-number">
                    04
                </span>

                <h2>
                    Who this course is for
                </h2>

            </div>


            <div class="audience-list">

                ${audience.map(
                    item => `

                    <div class="audience-item">

                        ${safe(item)}

                    </div>

                `
                ).join("")}

            </div>

        </section>

    `;
}



/* =========================================================
   INCLUDES
   ========================================================= */

function renderIncludes(includes) {

    if (
        !Array.isArray(includes) ||
        includes.length === 0
    ) {

        return "";

    }


    return `

        <section class="detail-section">

            <div class="detail-section-header">

                <span class="detail-number">
                    05
                </span>

                <h2>
                    What's included
                </h2>

            </div>


            <div class="includes-grid">

                ${includes.map(
                    item => `

                    <div class="include-item">

                        ✓ ${safe(item)}

                    </div>

                `
                ).join("")}

            </div>

        </section>

    `;
}



/* =========================================================
   SHORT COURSE TITLE
   ========================================================= */

function getShortTitle(title) {

    if (!title) {
        return "NT";
    }


    const words =
        title
            .replace(/&/g, "")
            .split(/\s+/)
            .filter(Boolean);


    if (words.length === 1) {

        return words[0]
            .substring(0, 3)
            .toUpperCase();

    }


    return words
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();

}



/* =========================================================
   SAFE HTML
   ========================================================= */

function safe(value) {

    if (
        value === undefined ||
        value === null
    ) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}



/* =========================================================
   ERROR
   ========================================================= */

function showCourseError(
    title,
    message
) {

    const container =
        document.getElementById(
            "courseContainer"
        );


    container.innerHTML = `

        <div class="course-error">

            <div class="course-error-box">

                <h2>
                    ${safe(title)}
                </h2>

                <p>
                    ${safe(message)}
                </p>

                <a href="courses.html">
                    ← Browse Courses
                </a>

            </div>

        </div>

    `;

}



/* =========================================================
   REVEAL
   ========================================================= */

function initializeReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.08
            }

        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}