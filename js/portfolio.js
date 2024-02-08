document.addEventListener("DOMContentLoaded", function() {
  // Get all menu buttons
  const menuButtons = document.querySelectorAll(".portfolio-btn");

  // Attach event listeners to menu buttons
  menuButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const category = button.getAttribute("data-category");
      console.log(`Clicked category: ${category}`);
      filterProjects(category);
      
      // ** another way to get category **
      // const categoryName = button.textContent.trim();
      // filterProjects(categoryName);
    });
  });

  // Function to filter projects based on category
  function filterProjects(category) {
    const projects = document.querySelectorAll(".services__item");

    projects.forEach(function(project) {
      const projectCategories = project.getAttribute("data-categories").split(",");
      
      if (category === "All" || projectCategories.includes(category)) {
        project.style.display = "flex";
        console.log(`Displaying project: ${project.querySelector('.services__review').textContent}`);
      } else {
        project.style.display = "none";
        console.log(`Hiding project: ${project.querySelector('.services__review').textContent}`);
      }
    });
  }
});
