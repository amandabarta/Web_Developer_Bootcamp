  // var answer = prompt("Are we there yet?");

  // while(answer !== "yes" && answer !== "yeah") {
  //   var answer = prompt("Are we there yet?");
  // }

  // alert("Yay, we made it!");

  // Version 2 alert says "Yay, we made it!" as long as yes or yeah is in the phrase

  var answer = prompt("Are we there yet?");

  while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
  }

  alert("Yay, we made it!");
