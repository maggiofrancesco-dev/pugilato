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

document.querySelector(".hamburger").addEventListener("click", () => {
  openMenu();
});

let opened = false;
let chosen;
let chosenId;
function openMenu() {
  if (!opened) {
    {
      document.querySelector("header > ul").style.display = "flex";
      document.querySelector(".ul2").style.display = "flex";

      document.querySelector("header").style.minHeight = "100vh";
      document.querySelector("header").style.justifyContent = "start";
    }
  } else {
    document.querySelector("header").style.minHeight = "3rem";
    setTimeout(() => {
      document.querySelector("header > ul").style.display = "none";
      document.querySelector(".ul2").style.display = "none";
    }, 450);
  }
  opened = !opened;
}

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
