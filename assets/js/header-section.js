document.addEventListener("DOMContentLoaded", () => {
  const dropdown_bg = document.querySelector(".header_navigation_dropdown_bg");
  const selected = document.querySelectorAll(".header_navigation_dropdown");

  selected.forEach((select) => {

    const dropdown = select.querySelector(".header_dropdown_list");

    select.addEventListener("click", () => {
      selected.forEach((anotherSelect) => {
        if (anotherSelect != select) {
          anotherSelect.classList.remove("active");
          anotherSelect
            .querySelector(".header_dropdown_list")
            .classList.remove("active");
        }
      });

      select.classList.toggle("active");
      dropdown.classList.toggle("active");

      dropdown_bg.classList.toggle(
        "active",
        select.classList.contains("active")
      );
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header_navigation_dropdown")) {
      selected.forEach((select) => {
        select.classList.remove("active");
        select
          .querySelector(".header_dropdown_list")
          .classList.remove("active");
      });
      bg.classList.remove("active");
    }
  });
});
