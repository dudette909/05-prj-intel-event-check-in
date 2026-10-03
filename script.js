// the needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSele = document.getElementById("teamSelect");
const progBar = document.getElementById("progress-bar");

let count = 0;
const maxCount = 50;

// form submissions listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value;
  const team = teamSele.selectedOptions[0].text;

  console.log(name, team);

  count++;
  console.log("Current number of check-ins: ", count);
});
