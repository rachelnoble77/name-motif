"use strict";

function vowelGenerator(name) {
    var letters = name.toUpperCase().split('');
    var vowels = [];
    for (var i = 0; i < letters.length; i++) {
      if (letters[i] === 'A' || letters[i] === 'E' || letters[i] === 'I' || letters[i] === 'O' || letters[i] === 'U' || letters[i] === 'Y') {
       vowels.push(letters[i]);
      }
    }
    var notes = [];
    for (var k = 0; k < vowels.length; k++) {
        if (vowels[k] === 'A') {
            notes.push('C4');
        }
        if (vowels[k] === 'E') {
            notes.push('D4');
        }
        if (vowels[k] === 'I') {
            notes.push('E4');
        }
        if (vowels[k] === 'O') {
            notes.push('F4');
        }
        if (vowels[k] === 'U') {
            notes.push('G4');
        }
        if (vowels[k] === 'Y') {
            notes.push('A4');
        }
    }
    console.log(vowels, notes);
    return notes;
  }

  //var btn = document.getElementById('btn');
  //var synth;
  
  /*var notes = {
      A: 'C4',
      E: 'D4',
      I: 'E4',
      O: 'F4',
      U: 'G4',
      Y: 'A4'
  };

  var noteList = [
    'C4', 'D4', 'E4', 'F4',
    'G4', 'A4'
  ];
  
  function setPlay(time, note) {
    synth.triggerAttackRelease(notes, '4n', time);
  }
  
  btn.addEventListener('click', function() {
    synth = new Tone.Synth().toMaster();
    var melody = new Tone.Sequence(setPlay, noteList).start();
    melody.loop = 1;
  })
  
  
  Tone.Transport.bpm.value = 90;
  Tone.Transport.start();
  */
module.exports = {
    create: (req, res) => {
        const {first, last} = req.body;
            vowelGenerator({first, last});
    },
    read: (req, res) => {
        res.notes.send
    },
    vowelGenerator: vowelGenerator,
}

/* Next step, apply rhythms to vowels
function motifGenerator(name) {
  var rhythm;
  var vowels = vowelGenerator(name).length;
  switch(true) {
    case vowels === 1:
      rhythm = "half note";
      break;
    case name.length <= 3 && vowels === 2:
      rhythm = "two quarter notes";
      break;
    case name.length === 4 && vowels === 2:
      rhythm = "dotted quarter and eighth";
      break;
    case name.length === 4 && vowels === 3:
      rhythm = "quarter and 2 eighths";
      break;
    case name.length === 5 && vowels === 2:
      rhythm = "eighth and dotted quarter";
      break;
    case name.length === 5 && vowels === 3:
      rhythm = "2 eighths and a quarter";
      break;
    case name.length === 6 && vowels === 2:
      rhythm = "quarter, eighth rest and eighth note";
      break;
    case name.length === 6 && vowels === 3:
      rhythm = "eighth, quarter, and eighth";
      break;
    case name.length === 6 && vowels === 4:
      rhythm = "4 eighth notes";
      break;
    case name.length === 7 && vowels === 2:
      rhythm = "quarter, eighth note and eighth rest";
      break;
    case name.length === 7 && vowels === 3:
      rhythm = "eighth note, eighth rest, 2 eighths";
      break;
    case name.length === 7 && vowels === 4:
      rhythm = "1 quarter, 2 16ths and an eighth note";
      break;
    case name.length === 7 && vowels === 5:
      rhythm = "eighth, eighth, 2 16ths and eighth";
      break;
    case name.length === 8 && vowels === 2:
      rhythm = "eighth rest, eighth note and quarter";
      break;
    case name.length === 8 && vowels === 3:
      rhythm = "eighth rest, eighth note, 2 eighths";
      break;
    case name.length === 8 && vowels === 4:
      rhythm = "1 quarter, an eighth note and 2 16ths";
      break;
    case name.length === 8 && vowels === 5:
      rhythm = "3 eighths and 2 16ths";
      break;
    case name.length === 8 && vowels === 6:
      rhythm = "eighth, 2 16ths, eighth, 2 16ths";
      break;
    case name.length === 9 && vowels === 2:
      rhythm = "eighth note, eighth rest and quarter";
      break;
    case name.length === 9 && vowels === 3:
      rhythm = "2 eighths, eighth note and eighth rest";
      break;
    case name.length === 9 && vowels === 4:
      rhythm = "an eighth note, 2 16ths and 1 quarter";
      break;
    case name.length === 9 && vowels === 5:
      rhythm = "2 16ths and 3 eighths";
      break;
    case name.length === 9 && vowels === 6:
      rhythm = "eighth, 4 16ths, eighth";
      break;
    case name.length === 9 && vowels === 7:
      rhythm = "4 eighths, 1 eighth rest, 3 eighths";
      break;
    case name.length === 10 && vowels === 2:
      rhythm = "eight note, twp eighth rests and eighth note";
      break;
    case name.length === 10 && vowels === 3:
      rhythm = "2 eighths, eighth rest and eighth note";
      break;
    case name.length === 10 && vowels === 4:
      rhythm = "2 16ths, and eighth note and a quarter";
      break;
    case name.length === 10 && vowels === 5:
      rhythm = "eighth, 2 16ths, and 2 eighths";
      break;
    case name.length === 10 && vowels === 6:
      rhythm = "2 eighths, 4 16ths";
      break;
    case name.length === 10 && vowels === 7:
      rhythm = "2 eighths, one eighth rest, 5 eighths";
      break;
    case name.length === 10 && vowels === 8:
      rhythm = "all 16ths";
      break;
    default:
      console.log('Please use only letters, not numbers!');
  }
  return rhythm;
}
*/