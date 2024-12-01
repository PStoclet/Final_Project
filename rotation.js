document.querySelectorAll(".menu-bar a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default navigation
        const href = link.getAttribute("href"); // Get the target URL

        // Get the logo element
        const logo = document.getElementById("rotating-logo");

        // Show the logo with animation
        logo.classList.add("show-logo");

        // Wait for the animation to complete, then navigate
        setTimeout(() => {
            window.location.href = href;
        }, 4000); // Match the duration of the transform animation
    });
});
