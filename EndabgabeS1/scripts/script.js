document.getElementById('button-container').onclick = function() {
  let person = prompt("Please enter your name");
  let text;
  if (person == null || person == "") {
    alert ("Player cancelled to play.");
  } else {
    alert ("Ready to play " + person + "?");
  };
};

document.getElementById("play1").addEventListener("click", function(){
	var audio = document.getElementById('testAudio1');
  if(this.className == 'is-playing'){
    this.className = "";
    this.innerHTML = "SONG 1"
    audio.pause();
  }else{
    this.className = "is-playing";
    this.innerHTML = "Pause";
    audio.play();
  }

});

document.getElementById("play2").addEventListener("click", function(){
	var audio = document.getElementById('testAudio2');
  if(this.className == 'is-playing'){
    this.className = "";
    this.innerHTML = "SONG 2"
    audio.pause();
  }else{
    this.className = "is-playing";
    this.innerHTML = "Pause";
    audio.play();
  }

});

document.getElementById("play3").addEventListener("click", function(){
	var audio = document.getElementById('testAudio3');
  if(this.className == 'is-playing'){
    this.className = "";
    this.innerHTML = "SONG 3"
    audio.pause();
  }else{
    this.className = "is-playing";
    this.innerHTML = "Pause";
    audio.play();
  }

});