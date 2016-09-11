validation.js
===================
__validation.js__ is validation library prepared to validate forms type: input and submit.
The demo version can validate only inputs, which are numbers, names, Polish Id number (pesel), date in format (yyyy-mm-dd) and select with Polish days of the week.

Using the librabry
--------------------
To use the library is necessary to put in all inputs tags data-validate property with the validation indicator.
Validation indicators
input:
-  name - data-validate="name"
-  number - data-validate="number"
-  date - data-validate="date"
-  pesel - data-validate="pesel"

- to use more validation rules on one input:
  data-validate="number,pesel"

submit:
- day of the week - data-validate="day"

The form has to have id attribute and event on submit. Inside of the EventListener callback function is necessary to put the function validateLibrabry("formid") eg.:

document.getElementById("personal-info").addEventListener("submit", function(event){
  validationLibrabry("personal-info");
  console.log(validationArray);
});

When the validation is finished the array with validation information will be send in the variable validationArray. When the form pass validation test, form will be sent and validationArray will be empty array. When validation test is failed the form will not be sent and validationArray will contain all  fields in which the validation was failed.
