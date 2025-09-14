// Week 4 JavaScript Portfolio Project - COMPLETE SOLUTION
// Display generation using template literals and document.write()

console.log("=== GENERATING PORTFOLIO HTML ===");

// Step 1: Generate Header Section
console.log("Generating header...");
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;

// Display the header
document.write(headerHTML);

// Step 2: Generate About Section Content
console.log("Generating about section...");
let aboutHTML = `
    <div class="bio-text">
        <p>${portfolio.owner.bio}</p>
        <p><strong>Contact:</strong> <a href="mailto:${portfolio.owner.email}">${portfolio.owner.email}</a></p>
    </div>
`;

// We need to get the bio-content div and add to it
// Note: Using document.write() for immediate visual feedback
document.write(`
    <script>
        document.getElementById('bio-content').innerHTML = \`${aboutHTML}\`;
    </script>
`);

// Step 3: Generate Skills Section
console.log("Generating skills section...");
let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

// Use a simple for loop to iterate through skills array
for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);

// Step 4: Generate Projects Section
console.log("Generating projects section...");
let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

// Iterate through projects array
for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    
    // Create technologies string
    let techList = project.technologies.join(", ");
    
    // Add featured star if applicable
    let featuredStar = project.featured === true ? " ⭐" : "";
    
    // Build project card HTML
    projectsHTML = projectsHTML + `
        <article class="project-card">
            <h3>${project.title}${featuredStar}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${techList}</p>
            <p class="date">Completed: ${project.completionDate}</p>
        </article>
    `;
}

projectsHTML = projectsHTML + '</div></section>';
document.write(projectsHTML);

// Step 5: Generate Availability Status for Contact Section
console.log("Generating availability status...");
let availabilityHTML = '<div class="availability-status"><h3>Current Availability</h3>';

// Check each availability option and display appropriate status
if (portfolio.availability.freelance === true) {
    availabilityHTML = availabilityHTML + `
        <div class="availability-item">
            <span class="status-available">✅</span>
            Available for freelance projects
        </div>
    `;
} else {
    availabilityHTML = availabilityHTML + `
        <div class="availability-item">
            <span class="status-unavailable">❌</span>
            Not available for freelance projects
        </div>
    `;
}

if (portfolio.availability.partTime === true) {
    availabilityHTML = availabilityHTML + `
        <div class="availability-item">
            <span class="status-available">✅</span>
            Open to part-time opportunities
        </div>
    `;
} else {
    availabilityHTML = availabilityHTML + `
        <div class="availability-item">
            <span class="status-unavailable">❌</span>
            Not seeking part-time work
        </div>
    `;
}

if (portfolio.availability.fullTime === true) {
    availabilityHTML = availabilityHTML + `
        <div class="availability-item">
            <span class="status-available">✅</span>
            Seeking full-time positions
        </div>
    `;
} else {
    availabilityHTML = availabilityHTML + `
        <div class="availability-item">
            <span class="status-unavailable">❌</span>
            Not seeking full-time positions
        </div>
    `;
}

availabilityHTML = availabilityHTML + '</div>';

// Insert availability status into contact section
document.write(`
    <script>
        document.getElementById('availability-status').innerHTML = \`${availabilityHTML}\`;
    </script>
`);

// Step 6: Create alternate views for advanced students
console.log("Creating featured projects showcase...");
let featuredHTML = '<section><h2>Featured Work</h2><div class="projects-grid">';

// Only show featured projects
for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    
    if (project.featured === true) {
        let techList = project.technologies.join(", ");
        featuredHTML = featuredHTML + `
            <article class="project-card">
                <h3>${project.title} ⭐</h3>
                <p>${project.description}</p>
                <p class="tech">Technologies: ${techList}</p>
                <p><strong>Featured Project</strong></p>
            </article>
        `;
    }
}

featuredHTML = featuredHTML + '</div></section>';
// Uncomment to show featured projects instead of all projects:
// document.write(featuredHTML);

// Step 7: Data analysis for console
console.log("\n=== PORTFOLIO STATISTICS ===");
console.log(`Generated portfolio for: ${portfolio.owner.name}`);
console.log(`Total sections created: 4 (header, about, skills, projects)`);
console.log(`Skills displayed: ${portfolio.skills.length}`);
console.log(`Projects displayed: ${portfolio.projects.length}`);

// Count featured projects
let featuredCount = 0;
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        featuredCount = featuredCount + 1;
    }
}
console.log(`Featured projects: ${featuredCount}`);

// Display technologies used
let allTechnologies = [];
for (let i = 0; i < portfolio.projects.length; i++) {
    let projectTechs = portfolio.projects[i].technologies;
    for (let j = 0; j < projectTechs.length; j++) {
        if (allTechnologies.indexOf(projectTechs[j]) === -1) {
            allTechnologies.push(projectTechs[j]);
        }
    }
}
console.log(`Unique technologies used: ${allTechnologies.join(", ")}`);

console.log("Portfolio generation complete! 🎉");