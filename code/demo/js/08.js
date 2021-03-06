const input = document.getElementById("input");
const result = document.getElementById("result");
const runButton = document.getElementById("run");
input.focus();

function calcWidth(n) {
  let count = 0;
  n = Math.abs(n);
  do {
    count++;
    n = n / 10;
  } while (n >= 1);

  // if (n === 0) {
  //   return 1;
  // }

  // while(n >= 1) {
  //   n = n / 10;
  //   count++;
  // }
  return count;
}

function run() {
  const inNum = Number(input.value);
  let output = calcWidth(inNum);
  result.innerHTML = inNum + "有" + output + "位";
  input.value = null;
  input.focus();
}

runButton.addEventListener("click", run);

input.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    runButton.click();
  }
});
