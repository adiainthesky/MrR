$(document).ready(function() {
  $("form#form-group").submit(function(event) {
   event.preventDefault();
   let number = []
   number = parseInt($("input#inputNumber").val());
   let array=[]
   for (let index = 0; index <=number; index+=1){
     array.push(number[index]);
   } 
   array;

   let realNumbers = 0
   array.forEach(function(element) {
     realNumbers += parseInt(element);
   });
  realNumbers;

// console.log(number+1)
console.log(array)
console.log(realNumbers)





  });
});