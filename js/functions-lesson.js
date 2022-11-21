let user;
(function () {
   // let message = myFunction("Jason");
   // console.log(message);
   let person1 = "Billy Bob Thornton Joe Bob Junior Twice Removed",
       person2 = "Bob";
   fight(person1, person2);
   let x = isEven(52436356345233);
   console.log(x);
   let y = isEven(234235235324);
   console.log(y);
   let iBreakThings = isEven(true);
   console.log(iBreakThings);

   function myFunction(name){
      return "Thank you, " + name + ". You have ran my function";
   }

   function fight(person1, person2){
      console.log(person1 + " punched " + person2 + " right in the kisser.");
   }

   function isEven(num){
      // GET THE PIECES OF THE PUZZLE!!!!!
      // Put the pieces of the puzzle into variables
      let number = num;
      let answer = (number % 2 == 0);

      //finally return the answer
      return answer;
   }

})();