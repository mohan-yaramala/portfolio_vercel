import "./style.css";
import Experience from "./Experience/Experience.js";

const isMobile =
  /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || navigator.userAgentData?.mobile;

// Handle welcome screen
const welcomeScreen = document.getElementById('welcomeScreen');
const goButton = document.getElementById('goButton');

if (goButton) {
  goButton.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    
    // Start the experience after welcome screen fades out
    setTimeout(() => {
      if (window.innerWidth > 768 && !isMobile) {
        window.experience = new Experience({
          webglElement: document.querySelector("#webgl"),
          cssArcadeMachine: document.querySelector("#cssArcadeMachine"),
          cssLeftMonitor: document.querySelector("#cssLeftMonitor"),
          cssRightMonitor: document.querySelector("#cssRightMonitor"),
        });
      }
    }, 300);
  });
}

// Show mobile message if on mobile
if (window.innerWidth <= 768 || isMobile) {
  const mobileAdvise = document.querySelector(".mobile-text");
  mobileAdvise.style.display = "block";
  welcomeScreen.classList.add('hidden');
}
