function ValidationRule(name, regex) {
  this.name = name;
  this.regex = regex
}
let validateName = new ValidationRule("name", /^[a-zA-Z ]{2,20}$/);
let validateDate = new ValidationRule("date", /^\d{4}-[0-1]{1}\d{1}-[0-3]{1}\d{1}$/ );
let validatePesel = new ValidationRule("pesel", /^([0-9]{2})([0-1]{1})([0-9]{1})([0-3]{1})([0-9]{6})$/);
let validateDay = new ValidationRule("day");
let validateNumber = new ValidationRule("number", /^\d+$/);
let validateRules = [];

validateRules.push(validateName)
validateRules.push(validateDate)
validateRules.push(validatePesel);
validateRules.push(validateDay);
validateRules.push(validateNumber);

let weekDaysPl = [
  {name: "poniedzialek", number: 1},
  {name: "wtorek", number: 2},
  {name: "sroda", number: 3},
  {name: "czwartek", number: 4},
  {name: "piatek", number: 5},
  {name: "sobota", number: 6},
  {name: "niedziela", number: 7}
];
let validationArray = [];
//
// let submitForm = document.querySelector("[data-validationForm]");
// document.querySelector("[data-validationForm]".addEventListener("submit", function(event){
//   validationArray = findInputsToValidate();
//   console.log(validationArray);
//   if(validationArray.length !== 0){
//     event.preventDefault();
//   }
//
// });

function validateLibrabry(){
  validationArray = findInputsToValidate();
  if(validationArray.length !== 0){
    event.preventDefault();
  }
}
// Function which look for inputs elements to validate
function findInputsToValidate(){
  let toValidateInputs = Array.prototype.slice.call(document.querySelectorAll("[data-validate]"));

  let validateOutputs = toValidateInputs.filter(sortToValidationMethod);
  return validateOutputs;
};


function sortToValidationMethod(element) {

  let validationDatas = element.dataset.validate.split(",");

  var y = validationDatas.map(validationData => validateRules.filter(validationRule => validationRule.name === validationData));
  var x = [].concat.apply([],y);
  var v = x.map(rule => {
        if(rule.name === "day"){
          return  validateDayOfWeek(element.value)
        }
        return validateInput(element.value, rule.regex)})
      .reduce(makeOne)
    var d = chageToReverse(v);
  return d;
};

function chageToReverse(state) {
  if(state === true) {
    return false
  } return true
};


function makeOne(prev, next) {
  if (prev === false || next === false) {
      return false
    }
    return true
};

function validateInput(input, regularExpresion) {
  return input.match(regularExpresion) != null;
};

function validateDayOfWeek(day) {
  return day === weekDaysPl
                    .filter(weekDay => {
                       if(weekDay.number === new Date().getDay()){
                         return  weekDay.name
                       }
                     })
                     .map(weekDay => weekDay.name)
                     .reduce(weekDay => weekDay);
};
