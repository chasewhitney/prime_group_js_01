var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];
// name, employee number, salary, rating

var employees = [atticus, jem, boo, scout, robert, mayella];

//takes in 1 employee's array
//return name, bonus %, adjusted income (annual + bonus), total bonus rounded to nearest $

function bonusCalc(employees){
  var newArray = [];

  for (var i = 0; i < employees.length; i++) {
    var currentArray = [];
    var currentEmployee = employees[i];
    currentArray.push(currentEmployee[0]);
    currentArray.push(bonusPercent(currentEmployee));
    currentArray.push(Math.floor((bonusPercent(currentEmployee) + 1) * currentEmployee[2]));
    currentArray.push((Math.floor(bonusPercent(currentEmployee) * currentEmployee[2])));
    newArray.push(currentArray);
  }
  console.log(newArray);
}

bonusCalc(employees);

function bonusPercent(currentEmployee){
  var employeeNumber = currentEmployee[1];
  var income = currentEmployee[2];
  var rating = currentEmployee[3];

  var bonus = 0;
  if (rating < 3) { return 0;}
  if ( rating == 3) { bonus = 0.04;}
  else if ( rating == 4) { bonus = 0.06;}
  else if ( rating == 5) { bonus = 0.10;}
  if (employeeNumber.length < 5) {bonus = bonus + 0.05;}
  if (income > 65000) {bonus = bonus - 0.01;}
  if (bonus > 0.13) {bonus = 0.13;}
  if (bonus < 0) {bonus = 0;}
  return bonus;
}
