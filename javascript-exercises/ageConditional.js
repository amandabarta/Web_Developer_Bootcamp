var age = Number(prompt("What is your age?"));

if (age < 0) {
  console.log("Error. You don't exist yet!");
}

else if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue.");
}

else if (age < 21) {
  console.log("You can enter, but you can't drink.");
}

else if (age === 21) {
  console.log("Happy 21st Birthday!");
}

else if (age % 2!==0) {
  console.log("Your age is odd!");
}

else if (age % Math.sqrt(age)===0 ) {
  console.log("Your age is a perfect square!");
}

else {
  console.log("Come on in. You can drink.");
}
