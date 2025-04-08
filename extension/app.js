function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const dateString = now.toLocaleDateString("en-US", options);

  document.getElementById("clock").textContent = timeString;
  document.getElementById("date").textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);

function performSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;

    window.open(searchUrl, "_blank");
    document.getElementById("searchInput").value = "";
  }
}

document.getElementById("searchBtn").addEventListener("click", performSearch);
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });

function loadTheme() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.getElementById("themeToggle").checked = isDarkMode;
  setTheme(isDarkMode);
}

function setTheme(isDarkMode) {
  if (isDarkMode) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  localStorage.setItem("darkMode", isDarkMode);
}

function goToYouTube() {
  window.location.href = "https://www.youtube.com";
}

function goToInsta () {
  window.location.href = "https://www.instagram.com/"
}

function goToChatGPT() {
  window.location.href = "https://chatgpt.com/"
}

document.getElementById("themeToggle").addEventListener("change", function (e) {
  setTheme(e.target.checked);
});

document.addEventListener("DOMContentLoaded", loadTheme);
loadTheme();

document.getElementById("chatgpt-btn").addEventListener("click", goToChatGPT);
document.getElementById("Youtube").addEventListener("click", goToYouTube);
document.getElementById("insta").addEventListener("click", goToInsta);

