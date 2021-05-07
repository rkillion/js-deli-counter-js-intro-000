function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

var nowServing = (thisLine) => {
  var howMany = thisLine.length;
  var person = thisLine.shift();
  return howMany === 0 ? "There is nobody waiting to be served." : `Currently serving ${person}.`; //why doesn't this work??
  //if (howMany === 0 ) {
    //return "There is nobody waiting to be served!";
  //} else {
    //return `Currently serving ${person}.`;
  //}
}
