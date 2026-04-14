let container = document.getElementById("container");
let button = document.getElementById("btn");
let qtd = document.getElementById("quantidade");
let reset = document.getElementById("reset");

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener("click", function () {
  if (qtd.value > 100) {
    qtd.value = 100;
  } else if (qtd.value <= 0) {
    qtd.value = 1;
  }
  grade_pct = 100 / qtd.value;
  container.innerHTML = "";
  for (let i = 0; i < qtd.value; i++) {
    const novaDiv = document.createElement("div");
    novaDiv.className = "grade";
    let enterCount = 0;
    novaDiv.innerHTML = `<p>${enterCount}</p>`;

    reset.addEventListener("click", function () {
      novaDiv.style.backgroundColor = "";
    });
    novaDiv.addEventListener("mouseenter", function () {
      if (enterCount === 0) {
        const rnd1 = randomNum(1, 255);
        const rnd2 = randomNum(1, 255);
        const rnd3 = randomNum(1, 255);

        novaDiv.style.backgroundColor = `rgba(${rnd1}, ${rnd2}, ${rnd3})`;
      }
      enterCount += 1;
      novaDiv.innerHTML = `<p>${enterCount}</p>`;
    });

    container.appendChild(novaDiv);
  }
});
