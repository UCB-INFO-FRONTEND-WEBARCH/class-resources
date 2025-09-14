// Week 4 JavaScript Portfolio Project - COMPLETE SOLUTION
// Data-driven portfolio using JavaScript objects and arrays

// Complete portfolio data structure
const portfolio = {
    // Personal information object
    owner: {
        name: "Alex Johnson",
        title: "Front-End Developer & UI Designer",
        email: "alex.johnson@email.com",
        location: "Berkeley, CA",
        bio: "I'm a passionate front-end developer currently studying at UC Berkeley. I love creating beautiful, functional websites that provide great user experiences. My goal is to combine my technical skills with creative design to build digital products that make a difference. When I'm not coding, you'll find me hiking in the Bay Area, reading about emerging web technologies, or experimenting with new design trends."
    },
    
    // Skills as an array - easy to add/remove/modify
    skills: [
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "JavaScript Fundamentals",
        "UI/UX Design Principles",
        "Git Version Control",
        "Adobe Creative Suite",
        "Problem Solving & Debugging"
    ],
    
    // Projects as array of objects - structured data
    projects: [
        {
            title: "Personal Blog Website",
            description: "A fully responsive blog showcasing my learning journey in web development. Built with semantic HTML and modern CSS techniques.",
            technologies: ["HTML5", "CSS3", "Responsive Design"],
            completionDate: "2025-08-15",
            featured: true
        },
        {
            title: "Task Manager Interface",
            description: "Clean and intuitive task management interface created for INFO 153A Assignment 1. Focuses on user experience and accessibility.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            completionDate: "2025-09-20",
            featured: true
        },
        {
            title: "Photography Portfolio",
            description: "A showcase of my photography work with CSS grid layouts and hover effects. Demonstrates my eye for design and attention to detail.",
            technologies: ["HTML", "CSS", "CSS Grid"],
            completionDate: "2025-07-30",
            featured: false
        },
        {
            title: "Local Business Landing Page",
            description: "Freelance project for a local coffee shop. Mobile-first design with focus on conversion and user engagement.",
            technologies: ["HTML", "CSS", "JavaScript", "Forms"],
            completionDate: "2025-08-01",
            featured: false
        }
    ],
    
    // Contact and availability information
    availability: {
        freelance: true,     // Available for freelance projects
        fullTime: false,     // Not currently seeking full-time (still in school)
        partTime: true       // Available for part-time opportunities
    }
};

// Data exploration and debugging
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// Practice accessing object properties
console.log("\n--- Personal Information ---");
console.log("Name:", portfolio.owner.name);
console.log("Title:", portfolio.owner.title);
console.log("Email:", portfolio.owner.email);
console.log("Location:", portfolio.owner.location);

// Practice with arrays
console.log("\n--- Skills Analysis ---");
console.log("Total skills:", portfolio.skills.length);
console.log("First skill:", portfolio.skills[0]);
console.log("Last skill:", portfolio.skills[portfolio.skills.length - 1]);

// Practice with arrays of objects
console.log("\n--- Projects Analysis ---");
console.log("Total projects:", portfolio.projects.length);
console.log("First project:", portfolio.projects[0].title);
console.log("Second project technologies:", portfolio.projects[1].technologies);

// Practice accessing nested data
console.log("\n--- Availability Status ---");
console.log("Available for freelance?", portfolio.availability.freelance);
console.log("Seeking full-time?", portfolio.availability.fullTime);
console.log("Available part-time?", portfolio.availability.partTime);

// Practice with template literals
console.log("\n--- Generated Content ---");
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} based in ${portfolio.owner.location} with ${portfolio.skills.length} key skills and ${portfolio.projects.length} completed projects.`;
console.log("Portfolio summary:", summary);

// Practice creating different data views
console.log("\n--- Featured Projects ---");
for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    if (project.featured === true) {
        console.log("⭐ Featured:", project.title);
    }
}

// Practice with JSON conversion (useful for data storage later)
console.log("\n--- JSON Representation ---");
let portfolioJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", portfolioJSON);