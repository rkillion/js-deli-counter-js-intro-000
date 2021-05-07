function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

var nowServing = (currentLine) => {
  currentLine.length === 0 ? "There is nobody waiting to be served!" :
  currentLine.shift();
}
