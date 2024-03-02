// ვიზუალის ვარიანტი

 

// let display = document.getElementById("display");

// function appendToDisplay(input){

// display.value += input;

// }

 

// function clearDisplay(){

// display.value = "";

// }

 

// function calculate(){

// display.value = eval(display.value);

// }






// კონსოლის ვარიანტი

 

function calculate(firstNumber, operator, secondNumber) {

  let result;

  switch (operator) {

    case "+":

      result = firstNumber + secondNumber;

      break;

    case "-":

      result = firstNumber - secondNumber;

      break;

    case "*":

      result = firstNumber * secondNumber;

      break;

    case "/":

      if (secondNumber === 0) {

        console.log("შეცდომა: ნოლზე გაყოფა არ შეიძლება.");

      } else {

        result = firstNumber / secondNumber;

      }

      break;

     default:

      console.log("შეცდომა: არასწორი ქმედება.");

  }

  return result;

}

 

 

  while (true) {

    const firstNumber = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი: "));

 

    if (isNaN(firstNumber)) {

      console.log("შეცდომა: კალკულატორი რიცხვებისთვისაა :))");

      alert("შეცდომა: კალკულატორი რიცხვებისთვისაა :))")

      continue;

    }

 

    const operator = prompt("რომელი ოპერაცია გსურთ (+, -, *, /): ");

    if (!["+", "-", "*", "/"].includes(operator)) {

      console.log("შეცდომა: არასწორი ოპერატორი.");

      alert("შეცდომა: არასწორი ოპერატორი.")

      continue;

    }

 

    const secondNumber = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი: "));

    if (isNaN(secondNumber)) {

      console.log("შეცდომა: კალკულატორი რიცხვებისთვისაა :))");

      alert("შეცდომა: კალკულატორი რიცხვებისთვისაა :))")

      continue;

    }

 

    const result = calculate(firstNumber, operator, secondNumber);


    // if (operator === '/') {
    //     result = firstNumber / secondNumber;
    // }
    // else if (operator === '*') {
    //     result = firstNumber * secondNumber;
    // }
    // else if (operator === '+') {
    //     result = firstNumber / secondNumber;
    // }
    // else if (operator === '-') {
    //     result = firstNumber / secondNumber;
    // }

    console.log("შედეგი:", result);

    alert("შედეგი:" + result);

 

 

    const continueCalculation = prompt("გნებავთ კიდევ რამის დათვლა ? (y/n): ");

    if (continueCalculation.toLowerCase() !== "y") {

      break;

    }

  }

