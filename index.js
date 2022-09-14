/*
Задача:
- користувач вводить курс Bitcoin до доллара
- користувач вводить суму доларів, що хоче поміняти на Bitcoin
- програма повертає кількість Bitcoin, що можна купити на вказану суму.
*/

const price = Number(prompt("What is Bitcoin price today?"));
const funds = Number(prompt("How much $ do you have?"));
const amount = funds / price;
if (Number.isNaN(amount)) {
  alert('You have entered invalid number!');
} else {
  alert(`You can buy ${amount.toFixed(8)} BTC`); 
}
