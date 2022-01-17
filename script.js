const body = document.getElementById("root");
const main = document.createElement("main");
const button = document.createElement("button");
const buttonPositive = document.createElement("button");
const input = document.createElement("input");
const label = document.createElement("label");
const h1 = document.createElement("h1");


const createPage = () => {
  body.appendChild(main);
  main.appendChild(h1);
  h1.innerText = "GERADOR DE ARRAYS ALEATÓRIOS";
  main.appendChild(label);
  label.innerText = "Posições:";
  main.appendChild(input);
  input.classList.add("input");
  input.id = "input";
  main.appendChild(button);
  button.classList.add("button");
  button.id = "button";
  button.innerText = "Gerar array aleatório";
  main.appendChild(buttonPositive)
  buttonPositive.classList.add('button')
  buttonPositive.id = 'buttonPositive'
  buttonPositive.innerText = 'Gerar array positivos'
};
createPage();

const INPUT = document.getElementById("input");
const BUTTON = document.getElementById("button");
const BUTTONPOSITIVE = document.getElementById("buttonPositive");
const docArr = document.createElement("h2");
const subTitulo = document.createElement("h3");

function getRandomArray(value) {
  let output = [];
  for (let i = 0; i < value; i++) {
    let randomNumber = Math.floor(Math.random() * (100 - (-100) + 1) + (-100));
    output.push(randomNumber);
  }

  return output;
}

function getRandomArrayPositiveOnly(value) {
    let output = [];
    for (let i = 0; i < value; i++) {
      let randomNumber = Math.floor(Math.random() * 100);
      output.push(randomNumber);
    }
  
    return output;
  }

const createArray = (arr) => {
  subTitulo.innerText = "Array Gerado:";
  console.log(arr);
  docArr.innerText = `[${arr}]`;
  main.appendChild(subTitulo);
  main.appendChild(docArr);
};

BUTTON.addEventListener("click", () => {
  docArr.innerText = "";
  subTitulo.innerText = "";
  const arr = getRandomArray(parseInt(INPUT.value));
  createArray(arr);
});

BUTTONPOSITIVE.addEventListener("click", () => {
    docArr.innerText = "";
    subTitulo.innerText = "";
    const arr = getRandomArrayPositiveOnly(parseInt(INPUT.value));
    createArray(arr);
  });
  
