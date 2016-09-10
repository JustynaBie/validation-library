document.addEventListener("DOMContentLoaded", function(event) {

  let submitForm = document.querySelector("[data-validationForm]");
  submitForm.addEventListener("submit", function(event){
    validateLibrabry();
    console.log(validationArray);
  });
});
