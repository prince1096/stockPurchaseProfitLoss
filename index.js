const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

button.addEventListener("click", submitHandler);

function stockCalculator(initial, quantity, current) {
  if (initial > 0 && quantity > 0 && current > 0) {
    if (initial > current) {
      let loss = (initial - current) * quantity;
      let lossPercentage = (loss / initial) * 100;
      lossPercentage = lossPercentage.toFixed(2);

      showOutput(
        `Hey the loss is ${loss} and the percent is ${lossPercentage}%`
      );
      output.style.color = "red";
    } else if (current > initial) {
      let gain = (current - initial) * quantity;
      let gainPercentage = (gain / initial) * 100;
      gainPercentage = gainPercentage.toFixed(2);
      showOutput(
        `Hey the gain is ${gain} and the percent is ${gainPercentage}%`
      );
      output.style.color = "green";
    } else {
      showOutput("Wait for currentPrice to move up and down");
    }
  } else {
    output.style.color = "red";

    showOutput("Fill all Inputs and Value should be greater than zero");
  }
}

function submitHandler() {
  let ip = Number(initialPrice.value);
  let qty = Number(stocksQuantity.value);
  let curr = Number(currentPrice.value);

  stockCalculator(ip, qty, curr);
}

function showOutput(msg) {
  output.innerHTML = msg;
}
