const darkMode = () => {
  const themeToggleBtn = document.querySelector(".theme-toggle-btn");
  const htmlElement = document.documentElement;

  htmlElement.classList.remove("light-mode");

  const udpateTheme = () => {
    if (htmlElement.classList.contains("dark-mode")) {
      htmlElement.classList.remove("dark-mode");
      htmlElement.classList.add("light-mode");
    } else {
      htmlElement.classList.remove("light-mode");
      htmlElement.classList.add("dark-mode");
    }
  };
  themeToggleBtn.addEventListener("click", udpateTheme);
};

export default darkMode;
