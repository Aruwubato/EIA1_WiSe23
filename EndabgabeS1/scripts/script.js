// Event-Handler für den Klick auf den Container
document.getElementById('button-container').onclick = function() {
  // Eingabeaufforderung für den Spieler-Namen
  let person = prompt("Please enter your name");
  // Überprüfung, ob der Spieler den Dialog abgebrochen oder keinen Namen eingegeben hat, ansonsten fragen, ob der Spieler bereit ist.
  if (person == null || person == "") {
      alert("Player cancelled to play.");
  } else {
      alert("Ready to play " + person + "?");
  }
};


// Event-Listener für den Klick auf den Button für SONG 1
document.getElementById("play1").addEventListener("click", function () {
  var audio = document.getElementById('testAudio1');
  // Überprüfung, ob der Song abgespielt oder pausiert wird
  if (this.className == 'is-playing') {
      this.className = "";
      this.innerHTML = "SONG 1";
      audio.pause();
  } else {
      this.className = "is-playing";
      this.innerHTML = "Pause";
      audio.play();
  }
});


// Event-Listener für den Klick auf den Button für SONG 2
document.getElementById("play2").addEventListener("click", function () {
  var audio = document.getElementById('testAudio2');
  // Überprüfung, ob der Song abgespielt oder pausiert wird
  if (this.className == 'is-playing') {
      this.className = "";
      this.innerHTML = "SONG 2";
      audio.pause();
  } else {
      this.className = "is-playing";
      this.innerHTML = "Pause";
      audio.play();
  }
});


// Event-Listener für den Klick auf den Button für SONG 3
document.getElementById("play3").addEventListener("click", function () {
  var audio = document.getElementById('testAudio3');
  // Überprüfung, ob der Song abgespielt oder pausiert wird
  if (this.className == 'is-playing') {
      this.className = "";
      this.innerHTML = "SONG 3";
      audio.pause();
  } else {
      this.className = "is-playing";
      this.innerHTML = "Pause";
      audio.play();
  }
});
