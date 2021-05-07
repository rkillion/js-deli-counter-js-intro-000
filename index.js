function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

var nowServing = (currentLine) => {
  var howMany = currentLine.length;
  howMany === 0 ? "There is nobody waiting to be served!" :
  return `Currently serving ${currentLine.shift()}.`;
}
