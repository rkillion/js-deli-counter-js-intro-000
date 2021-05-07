function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

var nowServing = (thisLine) => {
  var howMany = thisLine.length;
  var person = thisLine.shift();
  howMany === 0 ? "There is nobody waiting to be served!" : `Currently serving ${person}.`;
}
