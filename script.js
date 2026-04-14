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
  container.innerHTML = "";
  for (let i = 0; i < qtd.value; i++) {
    const novaDiv = document.createElement("div");
    novaDiv.className = "grade";
    let enterCount = 0;
    let opacity = 0;
    novaDiv.innerHTML = `<p>${enterCount}</p>`;

    reset.addEventListener("click", function () {
      enterCount = 0;
      opacity = 0;
      novaDiv.style.backgroundColor = "";
      novaDiv.innerHTML = `<p>${enterCount}</p>`;
    });

    let r;
    let g;
    let b;

    novaDiv.addEventListener("mouseenter", function () {
      if (enterCount === 0) {
        r = randomNum(1, 255);
        g = randomNum(1, 255);
        b = randomNum(1, 255);

        novaDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }

      if (enterCount <= 9) {
        enterCount += 1;
        opacity += 0.1;
        novaDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }

      novaDiv.innerHTML = `<p>${enterCount}</p>`;
    });

    container.appendChild(novaDiv);
  }
});
