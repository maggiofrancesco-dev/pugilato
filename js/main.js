var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[1];
msg.text = "";
for (const elem of document.getElementsByClassName("read")) {
  msg.text += elem.innerText;
}
let msgreplaced = msg.text.replaceAll("<", "minore di ");
msgreplaced = msgreplaced.replaceAll(">", "maggiore di ");
msgreplaced = msgreplaced.replaceAll("OZ", "once");
msg.text = msgreplaced;
msg.lang = "it";

console.log(msg.text);

function speak() {
  if (!window.speechSynthesis.speaking) {
    speechSynthesis.speak(msg);
  } else {
    speechSynthesis.cancel(msg);
  }
}

function stopSpeaking() {
  if (window.speechSynthesis.speaking) {
    speechSynthesis.cancel(msg);
  }
}

window.onbeforeunload = () => {
  stopSpeaking();
};
