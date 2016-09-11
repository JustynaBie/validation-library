// Constructor of object of validation rules
function ValidationRule(name, regex) {
  this.name = name;
  this.regex = regex
};

// Data to validate: objects with validation rules and array with week day
let validName = new ValidationRule("name", /^[a-zA-Z ]{2,20}$/);
let validDate = new ValidationRule("date", /^\d{4}-[0-1]{1}\d{1}-[0-3]{1}\d{1}$/ );
let validPesel = new ValidationRule("pesel", /^([0-9]{2})([0-1]{1})([0-9]{1})([0-3]{1})([0-9]{6})$/);
let validDay = new ValidationRule("day");
let validNumber = new ValidationRule("number", /^\d+$/);
let validRules = [];

validRules.push(validName);
validRules.push(validDate);
validRules.push(validPesel);
validRules.push(validDay);
validRules.push(validNumber);

let weekDaysPl = [
  {name: "niedziela", number: 0},
  {name: "poniedzialek", number: 1},
  {name: "wtorek", number: 2},
  {name: "sroda", number: 3},
  {name: "czwartek", number: 4},
  {name: "piatek", number: 5},
  {name: "sobota", number: 6}
];
let validationArray = [];

function validationLibrabry(formId){
  validationArray = manageValidation(formId);
  if(validationArray.length !== 0){
    event.preventDefault();
  }
}
// Function which look for inputs elements to validate nad then return the array of validation information
function manageValidation(formId){
  let formToValidate = document.getElementById(formId);
  let toValidateInputs = Array.prototype.slice.call(formToValidate.querySelectorAll("[data-validate]"));
  return toValidateInputs.filter(sortToValidationMethod);
};

//Function which sort and send proper data to validation funcion
function sortToValidationMethod(element) {

  let validationDatas = element.dataset.validate.split(",");

  var chosenValidationRules = validationDatas.map(validationData => validRules
    .filter(validRule => validRule.name === validationData));

  var chosenRules = [].concat.apply([],chosenValidationRules);

  var isValid = chosenRules.map(rule =>
    rule.name === "day" ? validateDayOfWeek(element.value) : validateInput(element.value, rule.regex))
    .reduce(makeOne);

  return changeToReverse(isValid);
};

// Function which change true to false
function changeToReverse(state) {
  if(state === true) {
    return false
  } return true
};

// Function which reduce all values to true or false
function makeOne(prev, next) {
  if (prev === false || next === false) {
      return false
    }
    return true
};

// Function to validate inputs
function validateInput(input, regularExpresion) {
  return input.match(regularExpresion) != null;
};

// Function to validate day of week
function validateDayOfWeek(day) {
  return day === weekDaysPl
                .filter(weekDay => weekDay.number === new Date().getDay())
                 .map(weekDay => weekDay.name)
                 .reduce(weekDay => weekDay);
};
