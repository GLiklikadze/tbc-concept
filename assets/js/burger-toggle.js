document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main");
  const footerElement = document.querySelector("footer");
  const toggleButton = document.querySelector(".header_menu-button");
  const footerContactCol=document.querySelector(".contact_col");

  toggleButton.addEventListener("click", () => {
    mainElement.classList.toggle("hidden");
    
    footerElement.classList.toggle("hidden");
    if(footerElement.classList.contains("hidden")){
        footerContactCol.classList.toggle("hidden")
    }
  });
});
