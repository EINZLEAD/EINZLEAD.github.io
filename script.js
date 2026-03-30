// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dark Mode Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Load preferred theme on startup (default is light)
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggleBtn.textContent = 'Switch Light';
        }
    }

    // Add a "click" event listener to the button
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Switch Light';
            theme = 'dark-mode';
        } else {
            themeToggleBtn.textContent = 'Switch Theme';
        }
        localStorage.setItem('theme', theme); // Save preference
    });


    // --- Mobile Menu Logic ---
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const hamburgerNav = document.getElementById('hamburger-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu open/close when clicking the icon
    hamburgerIcon.addEventListener('click', () => {
        hamburgerNav.classList.toggle('active');
    });

    // Close the menu automatically when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerNav.classList.remove('active');
        });
    });

});