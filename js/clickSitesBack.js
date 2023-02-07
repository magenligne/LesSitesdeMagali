let messageKanap = document.getElementById("kanapMsg");
let K0 = document.getElementById("K0");
let skillsK1 = document.getElementById("skillsK1");
let skillsK2 = document.getElementById("skillsK2");

let messageHT = document.getElementById("HTEMsg");
let H0 = document.getElementById("H0");
let skillsH1 = document.getElementById("skillsH1");
let skillsH2 = document.getElementById("skillsH2");

let clikKanap = document.getElementById("lienKanap"); //on recupere le pointage du BOUTON dans le DOM
clikKanap.addEventListener(
  "click",
  () => {
    console.log(skillsK1);
    console.log(skillsK1.display);

    if (getComputedStyle(skillsK1).display != "none") {
      skillsK1.style.display = "none";
      skillsK2.style.display = "none";
      K0.style.display = "none";

      messageKanap.innerHTML = ` Ce site n'est pas en ligne. Vous pouvez le consulter en local via gitHub: https://magenligne.github.io/`;
      messageKanap.style.color = "yellowgreen";
    } else {
      skillsK1.style.display = "block";
      skillsK2.style.display = "block";

      messageKanap.innerHTML = ``;
    }
  },
  false
);

let clikHT = document.getElementById("lienHottakes"); //on recupere le pointage du BOUTON dans le DOM
clikHT.addEventListener(
  "click",
  () => {
    if (getComputedStyle(skillsH1).display != "none") {
      skillsH1.style.display = "none";
      skillsH2.style.display = "none";
      H0.style.display = "none";

      messageHT.innerHTML = ` Ce site n'est pas en ligne. Vous pouvez le consulter en local via gitHub: https://magenligne.github.io/`;
      messageHT.style.color = "yellowgreen";
    } else {
      skillsH1.style.display = "block";
      skillsH2.style.display = "block";

      messageHT.innerHTML = ``;
    }
  },
  false
);
