// 1. Grab elements from HTML
const toggleBtn = document.getElementById("toggleBtn");
const goalsList = document.getElementById("goalsList");

// 2. Keep track of whether goals are visible
let isVisible = false;

// 3. Tell the browser: when the button is clicked, run this function
toggleBtn.addEventListener("click", function () {

  // 4. If goals are currently hidden, show them
  if (isVisible === false) {
    goalsList.classList.remove("hidden");   // show the list
    toggleBtn.textContent = "Hide My Goals"; // change button text
    isVisible = true;                       // update state
  } 
  // 5. Otherwise, hide them
  else {
    goalsList.classList.add("hidden");      // hide the list
    toggleBtn.textContent = "Show My Goals"; // change button text
    isVisible = false;                      // update state
  }
});