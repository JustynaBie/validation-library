// Demo to validation librabry
document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("personal-info").addEventListener("submit", function(event){
    validationLibrabry("personal-info");
    console.log(validationArray);
  });

  document.getElementById("user-age").addEventListener("submit", function(event){
    validationLibrabry("user-age");
    console.log(validationArray);
  });
});
