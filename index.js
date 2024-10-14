let menuid = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let iconhide= document.getElementById("close-icon")


menuid.addEventListener("click", () => {
  navbar.classList.add("active"); 
  navbar.classList.remove("hide"); 
  iconhide.style.display = "block"; 
  menuid.style.display = "none"; 
});

// Event listener for the close icon
iconhide.addEventListener("click", () => {
  navbar.classList.add("hide"); // 
  navbar.classList.remove("active"); 
  iconhide.style.display = "none"; 
  menuid.style.display = "block"; 
});


