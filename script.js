// Wait for the entire page to load (including images, stylesheets, etc.)
window.addEventListener('load', function() {
    
    // Get references to the loading screen and main content
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Add the 'hide' class to the loading screen (triggers CSS transition)
    loadingScreen.classList.add('hide');
    
    // Wait a short time for the fade-out animation to complete
    setTimeout(function() {
        // Add the 'show' class to main content (makes it visible)
        mainContent.classList.add('show');
    }, 300); // 300ms delay
    
});