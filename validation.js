$(document).on("ready",function(){

  function ValidationRule(name, regex) {
    this.name = name;
    this.regex = regex
  }
  let validateName = new ValidationRule("name", /^[a-zA-Z ]{2,20}$/);
  let validateNumber = new ValidationRule("date", /^\d{4}-[0-1]{1}\d{1}-[0-3]{1}\d{1}$/ );
  let validatePesel = new ValidationRule("pesel", /^([0-9]{2})([0-1]{1})([0-9]{1})([0-3]{1})([0-9]{6})$/);
  let validateRules = [];
  console.log(validateName);
  validateRules.push(validateName)
  validateRules.push(validateNumber)
  validateRules.push(validatePesel);
  console.log(validateRules);


  let submitButton = document.querySelector("[data-submit]");
  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    findInputstoValidate();
    findSelectValidate();
  });

// Function which look for inputs elements to validate
function findInputstoValidate(){
  let toValidateInputs = Array.prototype.slice.call(document.querySelectorAll("[data-validate]"));
  console.log(toValidateInputs);
  // let validateOutputs = toValidateInputs.forEach(sortToValidationMethod);
  let validateOutputs = toValidateInputs.filter(sortToValidationMethod);
console.log(validateOutputs);
};

function findSelectValidate() {
  let selectInput = document.getElementById("day").value;
  console.log(selectInput)
};

// function validate(inputElement) {
//   let inputToRegex = inputElement.dataset.validate;
//
//   console.log(inputToRegex)
// }
//
// findInputstoValidate();

function sortToValidationMethod(element) {

  // let validationData = element.dataset.validate;
 let validationDatas = ['name', 'pesel'];

  var y = validateRules.filter(filterValidation)
    .map(rule => {return !validateInput(element.value, rule.regex)})
    .reduce(makeOne);

function filterValidation(rule){
  return validationDatas.filter(validationData => {if(rule.name === validationData) { console.log(rule); return rule}})
};

function makeOne(prev, next) {
  return prev + next
// if(prev === true && next === true) {
//   return true
// } else if(prev === true && next === false) {
//   return false
// } else if(prev === false && next === false) {
//   return false
// }
};

  console.log(y);
  // if( validationData === 'name') {
  //   return !validateName(element.value);}
  //   // let x = validateName(element.value);
  //   // console.log(x);
  // if( validationData === 'pesel') {
  //   return  !validatePesel(element.value);}
  //   // let x = validatePesel(element.value);
  //   // console.log(x);
  // // if (element === 'name') { return validateDate(element)}
  // // if (element === 'pesel') {return}
  // if( validationData === 'date') {
  //   return !validateDate(element.value)}
  //   // let x = validateDate(element.value);
  //   // console.log(x);
  // if(validationData === 'day') {
  //   return !validateDay(element.value);
  // }
}

function validateInput(input, regularExpresion) {
  console.log(input, regularExpresion);
  return input.match(regularExpresion) != null;
};

function validateDay(day) {
  let today = new Date();
  var x = today.getDay();
  console.log(x);
  console.log(day);
  return day === today.getDay();
}
});
