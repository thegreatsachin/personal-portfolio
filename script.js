// script.js

// Function to dynamically load sections
function loadSection(sectionId) {
    const mainContent = document.getElementById('main-content');
    
    switch (sectionId) {
        case 'about':
            mainContent.innerHTML = `
                <section id="about">
                    <h2>About Me</h2>
                    <img src="IMG_20231202_102256_252.jpg" alt="Sachin Yadav" class="profile-img">
                    <p>Hello! I'm Sachin Yadav, an enthusiastic Android developer specializing in custom operating systems and mobile technology. With a solid academic foundation and a commitment to continuous learning, I am passionate about leveraging my skills to drive innovation in the tech industry.</p>
                    <p>My journey in technology began in high school, where I first discovered my interest in programming and software development. Over the years, I have honed my skills through rigorous academic coursework and hands-on projects. I thrive on challenges and enjoy exploring new technologies to expand my expertise.</p>
                    <p>Beyond my professional pursuits, I am an avid learner and enjoy engaging with the developer community. In my free time, I work on personal projects, participate in tech forums, and attend developer meetups to stay updated with the latest trends and advancements in the field.</p>
                </section>
            `;
            break;
        case 'education':
            mainContent.innerHTML = `
                <section id="education">
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <h3><i class="fas fa-school"></i> High School</h3>
                            <p><strong>College:</strong> Kapil Muni Children's Academy</p>
                            <p><strong>Board:</strong> CBSE</p>
                            <p><strong>Year of Completion:</strong> 2014</p>
                            <p><strong>CGPA:</strong> 7.2</p>
                            <p>During my high school years, I developed a strong foundation in science and mathematics, which fueled my interest in technology. I actively participated in science fairs and coding competitions, showcasing my projects and gaining valuable insights into the world of programming.</p>
                        </li>
                        <li>
                            <h3><i class="fas fa-graduation-cap"></i> Intermediate</h3>
                            <p><strong>College:</strong> CH. Devi Dayal Inter College</p>
                            <p><strong>Board:</strong> UP Board</p>
                            <p><strong>Year of Completion:</strong> 2017</p>
                            <p><strong>Percentage:</strong> 61.40%</p>
                            <p>In intermediate, I delved deeper into subjects like physics, chemistry, and mathematics. My analytical and problem-solving skills were further honed, and I was actively involved in various academic and extracurricular activities, including coding clubs and tech workshops.</p>
                        </li>
                        <li>
                            <h3><i class="fas fa-university"></i> Graduation</h3>
                            <p><strong>College:</strong> CH. Madhav Singh Smarak Mahavidyalaya</p>
                            <p><strong>Board:</strong> DBRAU</p>
                            <p><strong>Year of Completion:</strong> 2021</p>
                            <p><strong>Percentage:</strong> 63.27%</p>
                            <p>During my graduation in Physics, Chemistry, and Mathematics, I gained a comprehensive understanding of scientific principles and their real-world applications. I completed numerous projects and research assignments, further enhancing my technical and analytical abilities.</p>
                        </li>
                        <li>
                            <h3><i class="fas fa-chalkboard-teacher"></i> B.Ed</h3>
                            <p><strong>College:</strong> CH. Madhav Singh Smarak Mahavidyalaya</p>
                            <p><strong>Board:</strong> DBRAU</p>
                            <p><strong>Year of Completion:</strong> 2024</p>
                            <p><strong>Percentage:</strong> 71.23%</p>
                            <p>In my Bachelor of Education program, I focused on effective teaching methodologies and strategies. This experience equipped me with the skills to communicate complex concepts clearly and engage students in meaningful learning experiences.</p>
                        </li>
                        <li>
                            <h3><i class="fas fa-laptop-code"></i> MCA</h3>
                            <p><strong>University:</strong> Galgotias University</p>
                            <p><strong>Status:</strong> Ongoing</p>
                            <p>Currently pursuing my Master of Computer Applications, I am focusing on advanced programming techniques, software development, and computer science theories. This program is helping me to further specialize in my field and stay abreast of the latest technological advancements.</p>
                        </li>
                    </ul>
                </section>
            `;
            break;
        case 'skills':
            mainContent.innerHTML = `
                <section id="skills">
                    <h2>Skills</h2>
                    <ul class="skills-list">
                        <li><i class="fas fa-laptop-code"></i> C Programming</li>
                    </ul>
                    <p>I have a deep understanding and extensive experience in C programming. My skills in C programming include:</p>
                    <ul class="skills-details">
                        <li>Proficient in writing efficient and optimized code in C.</li>
                        <li>Experienced in using various data structures such as arrays, linked lists, stacks, queues, and trees.</li>
                        <li>Strong understanding of algorithms, including sorting, searching, and graph algorithms.</li>
                        <li>Familiar with memory management and pointers for dynamic memory allocation and manipulation.</li>
                        <li>Experience in file handling and I/O operations for data processing and storage.</li>
                        <li>Ability to debug and test code using various tools and techniques.</li>
                        <li>Hands-on experience with embedded systems programming and real-time applications.</li>
                    </ul>
                </section>
            `;
            break;
        case 'contact':
            mainContent.innerHTML = `
                <section id="contact">
                    <h2>Contact Info</h2>
                    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:thegreatsachinbhai@gmail.com">thegreatsachinbhai@gmail.com</a></p>
                    <p><i class="fas fa-phone"></i> Phone: <a href="tel:+918923769210">+91 8923769210</a></p>
                </section>
            `;
            break;
        default:
            mainContent.innerHTML = `<p>Section not found.</p>`;
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
