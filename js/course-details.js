/* =========================================================
   NEX TALENT
   COURSE DETAILS RENDERER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("courseContainer");

    if (!container) {
        return;
    }


    /* =====================================================
       GET COURSE KEY
    ===================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const courseKey =
        params.get("course");


    /* =====================================================
       GET COURSE DATA
    ===================================================== */

    const courseCatalog =
        window.nexTalentCourses ||
        window.courses ||
        {};


    const course =
        courseCatalog[courseKey];


    if (!course) {

        container.innerHTML = `

            <div class="course-error">

                <h2>
                    Course not found
                </h2>

                <p>
                    The course you are looking for
                    could not be found.
                </p>

                <a href="courses.html">
                    ← Back to Courses
                </a>

            </div>

        `;

        return;

    }


    /* =====================================================
       HELPERS
    ===================================================== */

    function escapeHTML(value) {

        if (value === null || value === undefined) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function getArray(value) {

        if (!Array.isArray(value)) {
            return [];
        }

        return value;

    }


    function getCourseShortName(title) {

        if (!title) {
            return "Course";
        }

        if (
            title
                .toLowerCase()
                .includes("python")
        ) {
            return "Python";

        }

        if (
            title
                .toLowerCase()
                .includes("power bi")
        ) {
            return "Power BI";

        }

        if (
            title
                .toLowerCase()
                .includes("generative ai")
        ) {
            return "Generative AI";

        }

        if (
            title
                .toLowerCase()
                .includes("uipath")
        ) {
            return "UiPath";

        }

        if (
            title
                .toLowerCase()
                .includes("azure")
        ) {
            return "Azure";

        }

        if (
            title
                .toLowerCase()
                .includes("full stack")
        ) {
            return "Full Stack";

        }

        if (
            title
                .toLowerCase()
                .includes("devops")
        ) {
            return "DevOps";

        }

        if (
            title
                .toLowerCase()
                .includes("playwright")
        ) {
            return "Playwright";

        }

        return "NexTalent";

    }


    function getCourseFocus(course) {

        const category =
            (course.category || "")
                .toLowerCase();


        if (
            category.includes("testing")
        ) {
            return "UI + API";

        }

        if (
            category.includes("programming")
        ) {
            return "Programming + Data";

        }

        if (
            category.includes("analytics")
        ) {
            return "Analytics";

        }

        if (
            category.includes("intelligence")
        ) {
            return "AI + LLMs";

        }

        if (
            category.includes("automation")
        ) {
            return "Process Automation";

        }

        if (
            category.includes("cloud")
        ) {
            return "Cloud + Infrastructure";

        }

        if (
            category.includes("web")
        ) {
            return "Frontend + Backend";

        }

        if (
            category.includes("devops")
        ) {
            return "CI/CD + Cloud";

        }

        return "Practical Skills";

    }


    /* =====================================================
       HERO
    ===================================================== */

    const shortName =
        getCourseShortName(course.title);

    const focus =
        getCourseFocus(course);


    container.innerHTML = `

        <!-- =================================================
             COURSE HERO
        ================================================= -->

        <section class="detail-hero">

            <div class="courses-container detail-hero-inner">


                <!-- HERO CONTENT -->

                <div class="detail-hero-content reveal">

                    <span class="detail-category">

                        ${escapeHTML(
                            course.category || "Learning"
                        )}

                    </span>


                    <h1>

                        ${escapeHTML(
                            course.title
                        )}

                    </h1>


                    <p class="detail-description">

                        ${escapeHTML(
                            course.description || ""
                        )}

                    </p>


                    <div class="detail-meta">

                        <span>
                            ${escapeHTML(
                                course.level || "All Levels"
                            )}
                        </span>

                        <span>
                            ${escapeHTML(
                                course.duration || "Flexible"
                            )}
                        </span>

                        <span>
                            ${escapeHTML(
                                course.lessons || "Practical Lessons"
                            )}
                        </span>

                    </div>

                </div>


                <!-- HERO VISUAL -->

                <div class="detail-visual reveal">

                    <div class="detail-ring one"></div>

                    <div class="detail-ring two"></div>

                    <div class="detail-ring three"></div>


                    <div class="detail-core">

                        <strong>

                            ${escapeHTML(
                                shortName
                            )}

                        </strong>

                        <small>
                            LEARN • PRACTICE • GROW
                        </small>

                    </div>


                    <div class="detail-chip one">

                        <strong>
                            01
                        </strong>

                        ${escapeHTML(
                            course.level || "Learning"
                        )}

                    </div>


                    <div class="detail-chip two">

                        <strong>
                            02
                        </strong>

                        ${escapeHTML(
                            course.duration || "Practical"
                        )}

                    </div>


                    <div class="detail-chip three">

                        <strong>
                            03
                        </strong>

                        ${escapeHTML(
                            focus
                        )}

                    </div>

                </div>

            </div>

        </section>



        <!-- =================================================
             COURSE MAIN
        ================================================= -->

        <section class="detail-main">

            <div class="courses-container detail-layout">


                <!-- =================================================
                     MAIN CONTENT
                ================================================= -->

                <div class="detail-content">


                    <!-- =================================================
                         SKILLS
                    ================================================= -->

                    <section class="detail-section reveal">

                        <div class="detail-section-heading">

                            <div class="detail-number">
                                01
                            </div>

                            <h2>
                                Skills you'll build
                            </h2>

                        </div>


                        <div class="skills-grid">

                            ${getArray(course.skills)
                                .map(function (skill) {

                                    return `

                                        <div class="skill-item">

                                            ${escapeHTML(skill)}

                                        </div>

                                    `;

                                })
                                .join("")
                            }

                        </div>

                    </section>



                    <!-- =================================================
                         CURRICULUM
                    ================================================= -->

                    <section class="detail-section reveal">

                        <div class="detail-section-heading">

                            <div class="detail-number">
                                02
                            </div>

                            <h2>
                                Curriculum
                            </h2>

                        </div>


                        <div class="curriculum-list">

                            ${renderCurriculum(
                                course.curriculum
                            )}

                        </div>

                    </section>



                    <!-- =================================================
                         PROJECTS
                    ================================================= -->

                    <section class="detail-section reveal">

                        <div class="detail-section-heading">

                            <div class="detail-number">
                                03
                            </div>

                            <h2>
                                Projects you'll build
                            </h2>

                        </div>


                        <div class="projects-grid">

                            ${getArray(course.projects)
                                .map(function (project, index) {

                                    return `

                                        <article class="project-card">

                                            <span class="project-number">

                                                PROJECT
                                                ${String(index + 1).padStart(2, "0")}

                                            </span>


                                            <h3>

                                                ${escapeHTML(project)}

                                            </h3>

                                        </article>

                                    `;

                                })
                                .join("")
                            }

                        </div>

                    </section>



                    <!-- =================================================
                         AUDIENCE
                    ================================================= -->

                    <section class="detail-section reveal">

                        <div class="detail-section-heading">

                            <div class="detail-number">
                                04
                            </div>

                            <h2>
                                Who this course is for
                            </h2>

                        </div>


                        <div class="audience-list">

                            ${getArray(course.audience)
                                .map(function (item) {

                                    return `

                                        <div class="audience-item">

                                            ${escapeHTML(item)}

                                        </div>

                                    `;

                                })
                                .join("")
                            }

                        </div>

                    </section>



                    <!-- =================================================
                         INCLUDES
                    ================================================= -->

                    <section class="detail-section reveal">

                        <div class="detail-section-heading">

                            <div class="detail-number">
                                05
                            </div>

                            <h2>
                                What's included
                            </h2>

                        </div>


                        <div class="includes-grid">

                            ${getArray(course.includes)
                                .map(function (item) {

                                    return `

                                        <div class="include-item">

                                            ${escapeHTML(item)}

                                        </div>

                                    `;

                                })
                                .join("")
                            }

                        </div>

                    </section>



                    <!-- =================================================
                         CTA
                    ================================================= -->

                    <section class="detail-cta reveal">

                        <div class="detail-cta-card">

                            <div class="section-label">

                                BUILD YOUR NEXT SKILL

                            </div>


                            <h2>

                                Ready to move
                                <span style="color:#65d0d7;">
                                    forward?
                                </span>

                            </h2>


                            <p>

                                Explore the course, build practical
                                skills and prepare yourself for
                                the evolving workplace.

                            </p>


                            <a
                                href="contact.html"
                                class="detail-cta-button"
                            >

                                Talk to Us →

                            </a>

                        </div>

                    </section>


                </div>



                <!-- =================================================
                     SIDEBAR
                ================================================= -->

                <aside class="detail-sidebar">

                    <div class="enroll-card">

                        <span class="enroll-label">

                            COURSE INFORMATION

                        </span>


                        <h3>

                            ${escapeHTML(
                                course.title
                            )}

                        </h3>


                        <div class="price">

                            ${escapeHTML(
                                course.price || "Coming Soon"
                            )}

                        </div>


                        <a
                            href="contact.html"
                            class="enroll-button"
                        >

                            Enquire About Course

                        </a>


                        <div class="sidebar-divider"></div>


                        <div class="quick-info">


                            <div class="quick-info-item">

                                <span>
                                    Level
                                </span>

                                <strong>
                                    ${escapeHTML(
                                        course.level || "-"
                                    )}
                                </strong>

                            </div>


                            <div class="quick-info-item">

                                <span>
                                    Duration
                                </span>

                                <strong>
                                    ${escapeHTML(
                                        course.duration || "-"
                                    )}
                                </strong>

                            </div>


                            <div class="quick-info-item">

                                <span>
                                    Lessons
                                </span>

                                <strong>
                                    ${escapeHTML(
                                        course.lessons || "-"
                                    )}
                                </strong>

                            </div>


                            <div class="quick-info-item">

                                <span>
                                    Category
                                </span>

                                <strong>
                                    ${escapeHTML(
                                        course.category || "-"
                                    )}
                                </strong>

                            </div>


                        </div>


                        <div class="career-note">

                            Practical learning,
                            projects and career-focused
                            guidance designed around
                            real-world skills.

                        </div>

                    </div>

                </aside>


            </div>

        </section>

    `;


    /* =====================================================
       CURRICULUM RENDERER
    ===================================================== */

    function renderCurriculum(curriculum) {

        const items =
            getArray(curriculum);


        if (!items.length) {

            return `

                <div class="curriculum-item">

                    <div class="curriculum-number">
                        01
                    </div>

                    <h4>
                        Curriculum details coming soon.
                    </h4>

                </div>

            `;

        }


        let html = "";

        let itemNumber = 1;


        items.forEach(function (item) {

            const text =
                String(item);


            /*
                Playwright contains:

                Module 1: Introduction to Playwright
                Module 2: TypeScript Programming
                etc.

                Render module headings differently.
            */

            const isModule =
                /^Module\s+\d+/i.test(text);


            if (isModule) {

                html += `

                    <div
                        class="curriculum-item"
                        style="
                            background:
                                linear-gradient(
                                    135deg,
                                    #eef8f9,
                                    #e6f2f5
                                );
                            border-color:
                                rgba(21,158,172,.16);
                        "
                    >

                        <div
                            class="curriculum-number"
                            style="
                                background:#073b73;
                                color:white;
                            "
                        >

                            ${String(
                                itemNumber
                            ).padStart(2, "0")}

                        </div>


                        <h4>

                            ${escapeHTML(text)}

                        </h4>

                    </div>

                `;


                itemNumber++;

                return;

            }


            html += `

                <div class="curriculum-item">

                    <div class="curriculum-number">

                        ${String(
                            itemNumber
                        ).padStart(2, "0")}

                    </div>


                    <h4>

                        ${escapeHTML(text)}

                    </h4>

                </div>

            `;


            itemNumber++;

        });


        return html;

    }


    /* =====================================================
       UPDATE DOCUMENT TITLE
    ===================================================== */

    document.title =
        `${course.title} | NexTalent`;


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
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


        revealElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add("active");

            }
        );

    }

});