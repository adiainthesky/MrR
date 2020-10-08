$(document).ready(function() {
  $("form#form-group").submit(function(event) {
   event.preventDefault();
   let number = [];
   number.push($("input#inputNumber").val());

   let array = number.map(function(item){
     return parseInt(item);
   });

   let newArray = []
   array.forEach(function(number) {
    while (number > -1) {
      newArray.push(number);
      number --;
    }
    return newArray;
   });

   let reverseArray = newArray.reverse();

console.log(reverseArray)

$("#result").text(number);



  });
});


  //  number = parseInt($("input#inputNumber").val());