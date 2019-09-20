const notes = [];

function addNote(id, content) {
  return notes.push({id, content});
}

addNote(1, 'try to add note');
addNote(2, "that was cool");
addNote(3, "can I add more?");

// console.log(notes);

function getNoteFromId(id) {
  if (id === undefined || !Number.isInteger(id)) {
    return `invalid parameter: id`;
  }
  for (let i=0; i<notes.length; i++) {
    if (id == notes[i].id) {
      return notes[i];
    } else {
      return `no such ID`;
    }
  }
}

console.log(getNoteFromId(1));
console.log(getNoteFromId());
console.log(getNoteFromId("one"));
console.log(getNoteFromId(5));

function getAllNotes() {
  return notes;
}

console.log(getAllNotes());

function logOutNotesFormatted() {
  let lines = [];
  for (let i=0; i<notes.length; i++) {
    lines.push(`The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}"`);
  }
  return lines.join("\n");
}

console.log(logOutNotesFormatted());