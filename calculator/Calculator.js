const exchangeArray = [2870, 3120, 3500, 2.3, 123, 11];
const amount = document.getElementById("amount");
const radios = document.getElementsByName("currency");
const result = document.getElementById("result");

function convertCurrency() {
  const amountValue = parseInt(amount.value);
  let exchangeRate;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      exchangeRate = exchangeArray[i];
      break;
    }
  }

  if (amountValue == null || isNaN(amountValue) || amountValue === 0) {
    result.innerHTML = `Enter your amount`;
  } else {
    const convertedAmount = amountValue * exchangeRate;
    result.innerHTML = `${convertedAmount.toFixed(2)} MNT`;
  }
}
function addNumber(number) {
  amount.value += number;
}

function clearDisplay() {
  amount.value = "";
}


function calculate() {
  let expression = amount.value;
  let resultValue = eval(expression);
  amount.value = resultValue;
}