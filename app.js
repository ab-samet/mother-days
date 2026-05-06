const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");

let state = 0;

envelope.addEventListener("click", () => {
  state++;

  if (state === 1) {
    // zarf açılıyor
    flap.style.transform = "rotateX(180deg)";
  }

  else if (state === 2) {
    // kağıt çıkıyor
    letter.style.top = "0";
  }

  else if (state === 3) {
    // kağıt geri giriyor
    letter.style.top = "100%";
  }

  else if (state === 4) {
    // zarf kapanıyor
    flap.style.transform = "rotateX(0deg)";
    state = 0;
  }
});