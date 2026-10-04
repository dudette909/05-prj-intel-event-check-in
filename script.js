// the needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSele = document.getElementById("teamSelect");
const progBar = document.getElementById("progressBar");
const attendeeNum = document.getElementById("attendeeCount");

let count = 0;
const maxCount = 50;
let percent = 0;

// form submissions listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value;
  const team = teamSele.selectedOptions[0].text;

  console.log(name, team);
  if (count < maxCount) {
    count++;
    percent = (count / maxCount) * 100;

    progBar.style.width = `${percent}%`;
  }

  // resets the form so it becomes blank for the next person
  this.reset();
});
