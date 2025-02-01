document.addEventListener("DOMContentLoaded", () => {
  // Clock
  function updateClock() {
    const now = new Date();
    const clockTime = document.querySelector(".clock-time");
    const clockDate = document.querySelector(".clock-date");

    if (clockTime && clockDate) {
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      clockTime.textContent = `${hours}:${minutes}`;

      const options = { weekday: "short", month: "short", day: "numeric" };
      clockDate.textContent = now.toLocaleDateString("en-US", options);
    }
  }

  updateClock();
  setInterval(updateClock, 1000);

  // Search
  const searchInput = document.querySelector(".search-input");

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const query = this.value.trim();
      if (query === "") return;

      const [prefix, ...searchTerms] = query.split(" ");
      const searchTerm = searchTerms.join(" ");

      const shortcuts = {
        "y:": `https://www.youtube.com/results?search_query=${searchTerm}`,
        "r:": `https://www.reddit.com/search?q=${searchTerm}`,
        "gh:": `https://github.com/search?q=${searchTerm}`,
      };

      if (prefix in shortcuts && searchTerm) {
        window.location.href = shortcuts[prefix];
      } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    }
  });
});
