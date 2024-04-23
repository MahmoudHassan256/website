// script.js

document.addEventListener("DOMContentLoaded", function () {
  const heroImg = document.getElementById("hero-img");
  const heroHeader = document.getElementById("hero-header");
  let isScrolling = false;

  heroImg.addEventListener("mouseover", function () {
    this.src = "./Images/hero.png";
  });
  heroImg.addEventListener("mouseout", function () {
    this.src = "./Images/nobghero.png";
  });
  const quoteApiUrl = "https://api.quotable.io/random";
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  const funWords = ["Full-stack", "Front-end", "Back-end", "Java", "C++"];
  const funTextElement = document.getElementById("fun-text");

  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const text = skill.dataset.text;
    skill.querySelector(".skill-text").textContent = text;
  });
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const randomTop = Math.random();
  const randomLeft = Math.random();

  // Generate random values for --random-top and --random-left CSS variables
  // Function to update the fun word every 5 seconds
  function updateFunWord(index) {
    const randomWord = funWords[(index % funWords.length)];
    funTextElement.textContent = randomWord;
    funTextElement.style.color = getRandomColor();
  }
  let index = 0;
  // Initial update of the fun word
  updateFunWord(index);
  

  // Periodically update the fun word every 5 seconds
  setInterval(()=>updateFunWord(++index), 1000);
  // Fetch a random quote from the quote API
  fetch(quoteApiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      return response.json();
    })
    .then((quoteData) => {
      const { content, author } = quoteData;
      quoteElement.textContent = content;
      authorElement.textContent = `- ${author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });

  function scrollToSection(id) {
    if (!isScrolling) {
      isScrolling = true;
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: "smooth",
      });
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Reset the flag after 1 second
    }
  }
  $(document).ready(function () {
    $(".project-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
    });
  });

  const skillsArray = {
    java: {
      name: "Java",
      icon: "./Images/icons/java-icon.png",
      alt: "Java Icon",
    },
    c: {
      name: "C",
      icon: "./Images/icons/c-icon.png",
      alt: "C Icon",
    },
    cpp: {
      name: "C++",
      icon: "./Images/icons/c++-icon.png",
      alt: "C++ Icon",
    },
    react: {
      name: "React",
      icon: "./Images/icons/react-icon.png",
      alt: "React Icon",
    },
    sql: {
      name: "SQL",
      icon: "./Images/icons/sql-icon.png",
      alt: "SQL Icon",
    },
    python: {
      name: "Python",
      icon: "./Images/icons/python-icon.png",
      alt: "Python Icon",
    },
    nodejs: {
      name: "Node.Js",
      icon: "./Images/icons/nodejs-icon.png",
      alt: "Node.Js Icon",
    },
    typescript: {
      name: "TypeScript",
      icon: "./Images/icons/typescript-icon.png",
      alt: "TypeScript Icon",
    },
    javascript: {
      name: "JavaScript",
      icon: "./Images/icons/javascript-icon.png",
      alt: "JavaScript Icon",
    },
  };

  // Function to generate HTML content for each skill
  function generateSkillHTML(skill) {
    return `
    <div class="skill">
      <img src="${skill.icon}" alt="${skill.alt}" />
      <span class="skill-text">${skill.name}</span>
    </div>
  `;
  }

  // Get the skills container element
  const skillsContainer = document.querySelector(".skills-container");

  // Iterate over each skill and generate HTML content
  for (const key in skillsArray) {
    if (skillsArray.hasOwnProperty(key)) {
      const skill = skillsArray[key];
      const skillHTML = generateSkillHTML(skill);
      skillsContainer.innerHTML += skillHTML;
    }
  }

  // Define an array of projects
  const projects = [
    {
      name: "Pokedex",
      description:
        "The Pokedex project involves creating a web application that interfaces with the PokeAPI to retrieve information about the first 20 Pokémon and display them to users in the form of cards on the main page. Users can click on a specific Pokémon card to view additional details on an inner page. Additionally, there is a Load More button at the bottom of the main page to fetch the next 20 Pokémon, implementing pagination functionality.",
      githubRepo: "https://github.com/MahmoudHassan256/pokedex",
      skillsUsed: ["react"],
    },
    {
      name: "Epicure",
      description:
        "Epicure is an ambitious endeavor to create a sophisticated food ordering platform that celebrates Tel Aviv's vibrant culinary scene. With a focus on user experience and accessibility, Epicure aims to connect food enthusiasts with the city's most renowned restaurants in a seamless digital experience..",
      githubRepo: "https://github.com/MahmoudHassan256/EpicureProject",
      skillsUsed: ["react", "javascript", "typescript", "nodejs"],
    },
    {
      name: "Platform-2D-Game",
      description:
        "The Platform 2D Game is an adventure game set in a vibrant 2D world. Players navigate through levels, guiding their companion, Mike, through forests and caves while overcoming obstacles and battling enemies like Crabby. With intuitive controls and captivating visuals, the game offers an immersive experience for players of all levels.",
      githubRepo: "https://github.com/MahmoudHassan256/2D-Platform-Java-Gamer",
      skillsUsed: ["java"],
    },
    {
      name: "Travel-During-Covid",
      description:
        "2020-2021 Was a hard year for everyone since the spread of Covid 19. The world was not ready for such a difficult situation and needed a lot of adjustments to be able to deal with the pandemic. In this project, we focused on the changes that can be made on the field of flighting.",
      githubRepo: "https://github.com/MahmoudHassan256/FlightProject",
      skillsUsed: ["react", "javascript", "nodejs"],
    },
    {
      name: "CPS",
      description:
        "CPS (Car Parking System) is a Java-based client-server project developed to efficiently manage parking lots. It includes database management, worker roles for parking lot management, and user interfaces for tasks like reservation and check-in/check-out. Developed by Mahmoud Hassan and Muhammed Sarahni, CPS provided valuable learning experiences in Java programming and group collaboration.",
      githubRepo: "https://github.com/MahmoudHassan256/CPS-Project",
      skillsUsed: ["java"],
    },
  ];

  function renderProjects() {
    const projectSlider = document.querySelector(".project-slider");
    if (!projectSlider) return;

    // Clear existing content
    projectSlider.innerHTML = "";

    // Generate HTML for each project and append to the slider
    projects.forEach((project) => {
      const projectHTML = generateProjectHTML(project);
      projectSlider.innerHTML += projectHTML;
    });
  }
  function generateProjectHTML(project) {
    // Generate HTML content for each project
    return `
    <div class="project">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="languages-icons">
        ${project.skillsUsed
          .map(
            (skill) =>
              `<img src="./Images/icons/${skill}-icon.png" alt="${skill} Icon" />`
          )
          .join("")}
      </div>
      <a href="${project.githubRepo}" target="_blank">GitHub Repo</a>
      <div class="project-image">
        <img src="./Images/mockups/${
          project.name
        }-mockup.svg" alt="${project.name} Image" />
      </div>
       
    </div>
  `;
  }
  renderProjects();
});
