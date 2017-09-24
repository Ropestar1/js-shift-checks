const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  // console.log(e);
  let inBetween = false; // NOTE: flag variable: variable indicating the start of a process
  // e.shiftKey is true when the shiftKey is being held down & checks if checkbox is being checked.
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween; // toggles Boolean
      if (inBetween) checkbox.checked = true;
    })
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
