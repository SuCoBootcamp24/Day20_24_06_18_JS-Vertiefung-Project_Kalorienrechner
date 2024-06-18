function kjCalc(event) {
  event.preventDefault();

  const bodyHightInput = Number(document.getElementById("bodyHight").value);
  const ageInput = Number(document.getElementById("age").value);
  const bodyWeightInput = Number(document.getElementById("bodyWeight").value);
  const sexInput = document.querySelector("input[name='sex']:checked").value;
  const palInput = document.getElementById("pal").value;

  let bmr;

  if (sexInput == "male") {
    bmr = 66.47 + 13.7 * bodyWeightInput + 5 * bodyHightInput - 6.8 * ageInput;
  } else if (sexInput == "female") {
    bmr = 655.1 + 9.6 * bodyWeightInput + 1.8 * bodyHightInput - 4.7 * ageInput;
  }

  fillOutputTable(bmr, palInput);
}

function fillOutputTable(bmr, palInput) {
  const factor = 4.184;

  //Grundumsatz
  const outputTable11 = document.getElementById("table11");
  const outputTable12 = document.getElementById("table12");
  //Gesamtumsatz
  const outputTable21 = document.getElementById("table21");
  const outputTable22 = document.getElementById("table22");

  outputTable11.innerText = bmr.toFixed(2);
  outputTable12.innerText = (bmr * factor).toFixed(2);

  outputTable21.innerText = (palInput * bmr).toFixed(2);
  outputTable22.innerText = (palInput * bmr * factor).toFixed(2);
}
