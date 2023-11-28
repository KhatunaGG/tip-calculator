let bill = document.querySelector(".input__dollar");
let tipAmount = document.querySelector(".total-amount");
let persons = document.querySelector(".input__people");
let btns = document.querySelectorAll(".main__btn");
let error = document.querySelector(".people__span");
let totlaAmount = document.querySelector(".total-total");
let reset = document.querySelector(".reset");

let percent;
let billAmount;
let personsValue;
let tipAmountToFixed;

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.classList.add("active");
    percent = +e.target.textContent.slice(0, -1);
    billAmount = +bill.value;
    personsValue = +persons.value;

    if (persons.value !== "" && personsValue !== 0) {
      console.log(percent);
      tipAmount.innerHTML = `$${((billAmount / 100) * percent).toFixed(2)}`;
      tipAmountToFixed = +tipAmount.textContent.slice(1) * personsValue;
      totlaAmount.innerHTML = tipAmountToFixed.toFixed(2);
      reset.style.background = "#9FE8DF";
      reset.style.color = "#00474b";
    } else {
      tipAmount.textContent = "$0.00";
      persons.value = 0;
      error.classList.remove("displayNone");
      bill.style.border = "2px solid #26C2AE";
    }

    resetAll();
  });
});

function resetAll() {
  reset.addEventListener("click", (e) => {
    tipAmount.textContent = "$0.00";
    persons.value = "";
    totlaAmount.textContent = "$0.00";
    bill.value = "";
    reset.style.background = "#0D686D";
    reset.style.color = "#9FE8DF";
    bill.style.border = "none";
    error.classList.add("displayNone");
    btns.forEach((el) => {
      el.style.color = "#fff";
      el.style.background = "#00474B";
    });
  });
}
