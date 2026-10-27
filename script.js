//your JS code here. If required.
const grid = document.getElementById("grid");
const thumbs = document.querySelectorAll(".thumbail");

thumbs.forEach((img) => {
  img.dataset.originalId = img.id; // remember original id

  img.addEventListener("click", () => {
    const isExpanded = grid.classList.contains("expanded");

    if (!isExpanded) {
      grid.classList.add("expanded");
      img.classList.add("active");
      img.id = "fullsize";
    } else {
      grid.classList.remove("expanded");
      img.classList.remove("active");
      img.id = img.dataset.originalId;
    }
  });
});