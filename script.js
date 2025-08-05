const toggleButton = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme');

toggleButton.addEventListener('click', () => {
  // Add fade animation
  document.body.classList.add('fade-transition');

  setTimeout(() => {
    const darkEnabled = !darkTheme.disabled;

    // Toggle disabled properties
    darkTheme.disabled = darkEnabled;
    lightTheme.disabled = !darkEnabled;

    // Switch icon
    if (darkTheme.disabled) {
      toggleIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // Moon icon for light mode
      toggleIcon.alt = "Moon icon";
    } else {
      toggleIcon.src = "https://cdn-icons-png.flaticon.com/512/785/785214.png"; // Sun icon for dark mode
      toggleIcon.alt = "Sun icon";
    }

    // Remove fade animation after transition
    setTimeout(() => {
      document.body.classList.remove('fade-transition');
    }, 500);
  }, 50);
});
