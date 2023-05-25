const h1 = document.querySelector("h1");
const form = document.querySelector('.form1');
const pResult = document.querySelector(".result");
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('.btnCalculate');

// addEventListener

// btn.addEventListener('click', btnOnClick); this line is used witouth form

// function btnOnClick() {
//     const sumInputs = (Number(input1.value) + Number(input2.value));
//     pResult.innerText = "Result is: " + sumInputs;
// }

// the following code is because form take the lat button like a submit type, we have 2 option, adding a event.preventDefault or we could change the type of the button (type="button" insted type="submit")

form.addEventListener('submit', sumInputValues);

function sumInputValues(event) {
    event.preventDefault();
    const sumInputs = (Number(input1.value) + Number(input2.value));
    pResult.innerText = "Result is: " + sumInputs;
}
