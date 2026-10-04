// the needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSele = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const progBar = document.getElementById("progressBar");
const attendeeSpan = document.getElementById("attendeeCount");
const waterCount = document.getElementById("waterCount");
const zeroCount = document.getElementById("zeroCount");
const powerCount = document.getElementById("powerCount");

let count = 0;
const maxCount = 50;
let percent = 0;
let greetingMessage = [
  "Happy to have you aboard ",
  "Nice to meet you ",
  "We're glad to have you ",
];

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
    attendeeSpan.textContent = count;

    // Now to change the number under the correct team
    let teamName = teamSele.value;
    switch (teamName) {
      case "water":
        //let text = waterCount.textContent;
        waterCount.textContent = parseInt(waterCount.textContent || 0) + 1;
        break;
      case "zero":
        zeroCount.textContent = parseInt(zeroCount.textContent || 0) + 1;
        break;
      case "power":
        powerCount.textContent = parseInt(powerCount.textContent || 0) + 1;
        break;
    }

    const teamMembers = document.getElementById(`${teamName}Members`);
    const attendeeItem = document.createElement("li");
    attendeeItem.textContent = name;
    teamMembers.appendChild(attendeeItem);

    greeting.style.display = `flex`;
    greeting.textContent = `${name}, welcome to ${team}!`;
  }

  // resets the form so it becomes blank for the next person
  this.reset();
});
