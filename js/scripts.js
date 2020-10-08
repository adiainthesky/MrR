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


      reverseArray.forEach(function(number) {
    if (reverseArray.includes(1)) {
      reverseArray[number] = "Beep!"; 
    }
    else if (reverseArray.includes(2)) {
      reverseArray[number] = "Boop!" 
    }

  else if (reverseArray.includes(3)) {
      reverseArray[number] = "Won't you be my neighbor?" 
    };
  });



  // reverseArray.forEach(function(number, i) {
  //   if (reverseArray === 0) { 
  //     reverseArray[i] = "Beep!" 
  //   };
  // });



console.log(reverseArray)


$("#result").text(number);



  });
});


  //  number = parseInt($("input#inputNumber").val());