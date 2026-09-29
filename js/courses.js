<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <meta name="description"
          content="Explore professional courses in programming, data analytics, artificial intelligence, automation, cloud computing, web development and DevOps at NexTalent.">

    <title>Courses | NexTalent</title>

    <link rel="icon" type="image/png" href="../assets/images/logo.png">

    <link rel="stylesheet" href="../css/style.css">

    <style>

        /* =========================================
           COURSES PAGE
        ========================================= */

        .courses-page {
            background: #f7fafc;
            min-height: 100vh;
            padding-bottom: 80px;
        }

        /* Hero */

        .courses-hero {
            padding: 55px 20px 28px;
        }

        .courses-hero-inner {
            max-width: 1180px;
            margin: 0 auto;

            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;
        }

        .courses-eyebrow {
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #159eac;
            margin-bottom: 6px;
        }

        .courses-hero h1 {
            margin: 0;

            font-family: "Space Grotesk",
                         "Manrope",
                         Arial,
                         sans-serif;

            font-size: clamp(32px, 4vw, 48px);
            line-height: 1;
            letter-spacing: -1.8px;
            color: #073b73;
        }

        .courses-hero-description {
            max-width: 350px;

            font-size: 11px;
            line-height: 1.65;
            color: #5b6878;

            margin: 0;
        }


        /* =========================================
           FILTERS
        ========================================= */

        .course-filters {
            max-width: 1180px;
            margin: 0 auto 20px;

            padding: 0 20px;

            display: flex;
            flex-wrap: wrap;
            gap: 7px;
        }

        .course-filter {
            border: 1px solid #dce6ed;
            background: #ffffff;

            color: #073b73;

            font-size: 8px;
            font-weight: 700;

            padding: 6px 10px;

            border-radius: 20px;

            cursor: pointer;

            transition:
                background 0.2s ease,
                color 0.2s ease,
                transform 0.2s ease;
        }

        .course-filter:hover {
            transform: translateY(-1px);
        }

        .course-filter.active {
            background: #073b73;
            border-color: #073b73;
            color: #ffffff;
        }


        /* =========================================
           COURSE GRID
        ========================================= */

        .course-grid {
            max-width: 1180px;
            margin: 0 auto;

            padding: 0 20px;

            display: grid;

            grid-template-columns:
                repeat(3, minmax(0, 1fr));

            gap: 12px;
        }


        /* =========================================
           COURSE CARD
        ========================================= */

        .course-card {
            background: #ffffff;

            border: 1px solid #e1e9ef;

            border-radius: 10px;

            overflow: hidden;

            display: flex;
            flex-direction: column;

            min-height: 320px;

            box-shadow:
                0 8px 25px rgba(7, 59, 115, 0.06);

            transition:
                transform 0.25s ease,
                box-shadow 0.25s ease;
        }

        .course-card:hover {
            transform: translateY(-4px);

            box-shadow:
                0 15px 35px rgba(7, 59, 115, 0.12);
        }


        /* =========================================
           COURSE VISUAL
        ========================================= */

        .course-image {
            height: 145px;

            position: relative;

            overflow: hidden;

            display: flex;
            align-items: flex-start;
            justify-content: flex-start;

            padding: 9px;
        }

        .course-image::before,
        .course-image::after {
            content: "";

            position: absolute;

            border-radius: 50%;

            background: rgba(255,255,255,0.28);
        }

        .course-image::before {
            width: 95px;
            height: 95px;

            right: -20px;
            top: -35px;
        }

        .course-image::after {
            width: 70px;
            height: 70px;

            left: -30px;
            bottom: -40px;
        }

        .course-image > span {
            position: relative;
            z-index: 2;

            background: rgba(255,255,255,0.82);

            color: #073b73;

            padding: 4px 7px;

            border-radius: 4px;

            font-size: 7px;
            font-weight: 800;

            letter-spacing: 0.4px;
        }


        /* =========================================
           COURSE VISUAL COLORS
        ========================================= */

        .course-playwright {
            background:
                linear-gradient(
                    135deg,
                    #073b73 0%,
                    #159eac 58%,
                    #f7941d 100%
                );
        }

        .course-python {
            background:
                linear-gradient(
                    135deg,
                    #dcecf4,
                    #c5dfe9
                );
        }

        .course-data {
            background:
                linear-gradient(
                    135deg,
                    #dcecf4,
                    #c7e0e9
                );
        }

        .course-ai {
            background:
                linear-gradient(
                    135deg,
                    #d9edf3,
                    #c5e0e8
                );
        }

        .course-uipath {
            background:
                linear-gradient(
                    135deg,
                    #dcecf4,
                    #c5dfe8
                );
        }

        .course-cloud {
            background:
                linear-gradient(
                    135deg,
                    #dcecf4,
                    #c9e1e9
                );
        }

        .course-web {
            background:
                linear-gradient(
                    135deg,
                    #dcecf4,
                    #c7dfe8
                );
        }

        .course-devops {
            background:
                linear-gradient(
                    135deg,
                    #dcecf4,
                    #c5dfe9
                );
        }


        /* =========================================
           SIMPLE COURSE VISUALS
        ========================================= */

        .course-image::marker {
            display: none;
        }

        .course-visual-label {
            position: absolute;

            left: 50%;
            top: 50%;

            transform: translate(-50%, -50%);

            font-size: 18px;
            font-weight: 900;

            color: #073b73;

            z-index: 2;
        }


        /* =========================================
           COURSE CONTENT
        ========================================= */

        .course-content {
            padding: 12px 12px 11px;

            display: flex;
            flex-direction: column;

            flex: 1;
        }

        .course-category {
            font-size: 6px;

            font-weight: 900;

            text-transform: uppercase;

            letter-spacing: 1px;

            color: #159eac;

            margin-bottom: 5px;
        }

        .course-content h3 {
            margin: 0 0 5px;

            font-family:
                "Manrope",
                "Space Grotesk",
                Arial,
                sans-serif;

            color: #073b73;

            font-size: 15px;

            line-height: 1.15;

            letter-spacing: -0.4px;
        }

        .course-content p {
            margin: 0;

            color: #5b6878;

            font-size: 8px;

            line-height: 1.5;

            min-height: 27px;
        }


        /* =========================================
           META
        ========================================= */

        .course-meta {
            display: flex;
            flex-wrap: wrap;

            gap: 5px;

            margin-top: 8px;
        }

        .course-meta span {
            background: #f2f6f8;

            border: 1px solid #e1e9ed;

            color: #073b73;

            padding: 3px 5px;

            border-radius: 4px;

            font-size: 6px;

            font-weight: 700;
        }


        /* =========================================
           BOTTOM
        ========================================= */

        .course-bottom {
            margin-top: auto;

            padding-top: 12px;

            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .course-bottom strong {
            font-size: 7px;

            color: #14213d;
        }

        .course-bottom a {
            font-size: 7px;

            font-weight: 800;

            color: #073b73;

            text-decoration: none;
        }

        .course-bottom a:hover {
            color: #159eac;
        }


        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 900px) {

            .course-grid {
                grid-template-columns:
                    repeat(2, minmax(0, 1fr));
            }

            .courses-hero-inner {
                flex-direction: column;
                align-items: flex-start;
            }

        }


        @media (max-width: 600px) {

            .courses-hero {
                padding-top: 35px;
            }

            .courses-hero h1 {
                font-size: 34px;
            }

            .courses-hero-description {
                font-size: 10px;
            }

            .course-grid {
                grid-template-columns: 1fr;

                padding: 0 15px;
            }

            .course-filters {
                padding: 0 15px;
            }

            .course-image {
                height: 160px;
            }

        }

    </style>
</head>


<body>

    <!-- =========================================
         NAVBAR
    ========================================= -->

    <header class="site-header">

        <nav class="navbar">

            <a href="../index.html" class="nav-logo">
                <img
                    src="../assets/images/logo.png"
                    alt="NexTalent"
                >
            </a>

            <div class="nav-links">

                <a href="../index.html">
                    Home
                </a>

                <a href="courses.html" class="active">
                    Courses
                </a>

                <a href="jobs.html">
                    Jobs
                </a>

                <a href="candidates.html">
                    Candidates
                </a>

                <a href="recruiters.html">
                    Recruiters
                </a>

                <a href="about.html">
                    About
                </a>

                <a href="contact.html">
                    Contact
                </a>

            </div>

            <div class="nav-mobile">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>

    </header>


    <!-- =========================================
         COURSES PAGE
    ========================================= -->

    <main class="courses-page">

        <!-- HERO -->

        <section class="courses-hero">

            <div class="courses-hero-inner">

                <div>

                    <div class="courses-eyebrow">
                        Explore the library
                    </div>

                    <h1>
                        Find your next skill.
                    </h1>

                </div>

                <p class="courses-hero-description">
                    Explore courses across programming, analytics,
                    artificial intelligence, automation, cloud,
                    web development and DevOps.
                </p>

            </div>

        </section>


        <!-- FILTERS -->

        <div class="course-filters">

            <button class="course-filter active">
                All Courses
            </button>

            <button class="course-filter">
                Programming & Data
            </button>

            <button class="course-filter">
                Data & Analytics
            </button>

            <button class="course-filter">
                Artificial Intelligence
            </button>

            <button class="course-filter">
                Automation & RPA
            </button>

            <button class="course-filter">
                Cloud Computing
            </button>

            <button class="course-filter">
                Web Development
            </button>

            <button class="course-filter">
                DevOps
            </button>

            <button class="course-filter">
                Testing & Automation
            </button>

        </div>


        <!-- =========================================
             COURSE GRID
        ========================================= -->

        <section class="course-grid">


            <!-- 1. PLAYWRIGHT -->

            <article class="course-card">

                <div class="course-image course-playwright">

                    <span>
                        PLAYWRIGHT
                    </span>

                    <div class="course-visual-label">
                        ⚡
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        Testing & Automation
                    </span>

                    <h3>
                        Playwright Automation Testing
                    </h3>

                    <p>
                        Learn modern UI and API automation testing
                        using Playwright and TypeScript.
                    </p>

                    <div class="course-meta">

                        <span>
                            12 Weeks
                        </span>

                        <span>
                            60 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=playwright">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


            <!-- 2. PYTHON -->

            <article class="course-card">

                <div class="course-image course-python">

                    <span>
                        PYTHON
                    </span>

                    <div class="course-visual-label">
                        &lt;/&gt;
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        Programming & Data
                    </span>

                    <h3>
                        Python for Data Science
                    </h3>

                    <p>
                        Build a strong Python foundation and learn
                        how to work with data, analysis and AI.
                    </p>

                    <div class="course-meta">

                        <span>
                            8 Weeks
                        </span>

                        <span>
                            42 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=python">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


            <!-- 3. POWER BI -->

            <article class="course-card">

                <div class="course-image course-data">

                    <span>
                        ANALYTICS
                    </span>

                    <div class="course-visual-label">
                        ▮▮▮
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        Data & Analytics
                    </span>

                    <h3>
                        Data Analytics with Power BI
                    </h3>

                    <p>
                        Learn how to transform data into meaningful
                        dashboards, reports and business insights.
                    </p>

                    <div class="course-meta">

                        <span>
                            6 Weeks
                        </span>

                        <span>
                            35 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=powerbi">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


            <!-- 4. GENERATIVE AI -->

            <article class="course-card">

                <div class="course-image course-ai">

                    <span>
                        AI
                    </span>

                    <div class="course-visual-label">
                        AI
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        Artificial Intelligence
                    </span>

                    <h3>
                        Generative AI & LLMs
                    </h3>

                    <p>
                        Understand modern AI, large language models,
                        prompting and practical AI application development.
                    </p>

                    <div class="course-meta">

                        <span>
                            8 Weeks
                        </span>

                        <span>
                            40 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=genai">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


            <!-- 5. UIPATH -->

            <article class="course-card">

                <div class="course-image course-uipath">

                    <span>
                        AUTOMATION
                    </span>

                    <div class="course-visual-label">
                        🤖
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        Automation & RPA
                    </span>

                    <h3>
                        UiPath RPA Automation
                    </h3>

                    <p>
                        Learn how to automate repetitive business
                        processes using Robotic Process Automation and UiPath.
                    </p>

                    <div class="course-meta">

                        <span>
                            8 Weeks
                        </span>

                        <span>
                            40 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=uipath">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


            <!-- 6. AZURE -->

            <article class="course-card">

                <div class="course-image course-cloud">

                    <span>
                        CLOUD
                    </span>

                    <div class="course-visual-label">
                        ☁
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        Cloud Computing
                    </span>

                    <h3>
                        Cloud Fundamentals with Azure
                    </h3>

                    <p>
                        Learn essential cloud concepts and fundamentals
                        of Microsoft Azure.
                    </p>

                    <div class="course-meta">

                        <span>
                            6 Weeks
                        </span>

                        <span>
                            35 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=azure">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


            <!-- 7. FULL STACK -->

            <article class="course-card">

                <div class="course-image course-web">

                    <span>
                        WEB DEVELOPMENT
                    </span>

                    <div class="course-visual-label">
                        &lt;/&gt;
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        Web Development
                    </span>

                    <h3>
                        Full Stack Web Development
                    </h3>

                    <p>
                        Build modern web applications using frontend,
                        backend and full-stack development fundamentals.
                    </p>

                    <div class="course-meta">

                        <span>
                            12 Weeks
                        </span>

                        <span>
                            60 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=fullstack">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


            <!-- 8. DEVOPS -->

            <article class="course-card">

                <div class="course-image course-devops">

                    <span>
                        DEVOPS
                    </span>

                    <div class="course-visual-label">
                        ○──○──○
                    </div>

                </div>

                <div class="course-content">

                    <span class="course-category">
                        DevOps
                    </span>

                    <h3>
                        DevOps & Cloud Infrastructure
                    </h3>

                    <p>
                        Learn Linux, networking, containers, CI/CD and
                        cloud infrastructure concepts for modern IT environments.
                    </p>

                    <div class="course-meta">

                        <span>
                            10 Weeks
                        </span>

                        <span>
                            50 Lessons
                        </span>

                    </div>

                    <div class="course-bottom">

                        <strong>
                            Coming Soon
                        </strong>

                        <a href="course-details.html?course=devops">
                            View Course →
                        </a>

                    </div>

                </div>

            </article>


        </section>

    </main>


    <!-- =========================================
         JAVASCRIPT
    ========================================= -->

    <script src="../js/navbar.js"></script>

    <script>

        /* Course filter visual state */

        const filters =
            document.querySelectorAll(".course-filter");

        filters.forEach(filter => {

            filter.addEventListener("click", () => {

                filters.forEach(item => {
                    item.classList.remove("active");
                });

                filter.classList.add("active");

            });

        });

    </script>

</body>
</html>