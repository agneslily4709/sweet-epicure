const navIcon = document.getElementById("navIcon")
const navOptions  = document.getElementById("navOptions")
navIcon.addEventListener("click", () => {
        navOptions.style.display = navOptions.style.display === "block" ? "none" : "block";
        navIcon.innerHTML = (navOptions.style.display === "block") ? "&#10006;" : "&#9776;";
});