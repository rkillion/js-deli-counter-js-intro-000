function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

var nowServing = (thisLine) => {
  var howMany = thisLine.length;
  var person = thisLine.shift();
  function innerFunction() {howMany === 0 ? "There is nobody waiting to be served." : `Currently serving ${person}.`;}
  //if (howMany === 0 ) {
    //return "There is nobody waiting to be served!";
  //} else {
    //return `Currently serving ${person}.`;
  //}
}
