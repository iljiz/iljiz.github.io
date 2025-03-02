document.addEventListener("DOMContentLoaded", () => {
  fetch("content/projects_list.json")
    .then((response) => response.json())
    .then((data) => {
      const textContainer = document.querySelector(".text-container");
      textContainer.innerHTML = "";

      data.projects.forEach((project) => {
        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.textContent = project.public_title;
        projectLink.className = "project-title";

        const dateSpan = document.createElement("span");
        dateSpan.textContent = project.date;
        dateSpan.className = "project-date";

        const projectDiv = document.createElement("div");
        projectDiv.className = "project-item";
        projectDiv.appendChild(projectLink);
        projectDiv.appendChild(dateSpan);

        textContainer.appendChild(projectDiv);
      });
    })
    .catch((error) => console.error("Ошибка загрузки JSON:", error));
});
