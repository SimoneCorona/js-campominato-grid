// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

const cells = 100;

const cellsMedium = 81;

const cellsDifficult = 49;

const cellNum = [];
for (let i = 0; i < 100; i++) {
    cellNum[i] = i + 1;
}
console.log(cellNum);   

const box = document.querySelector(".box");
console.log(box);

for (let i = 0; i < cells; i++) {
    const item = document.createElement("div");
    console.log(item);

    item.innerHTML = `<span>${cellNum[i]}</span>`    
    
    item.classList.add("cell", "difficultySelection.value" ,"display");

    item.addEventListener("click", function(){
        this.classList.add("azzurre")
    });

    box.append(item);
}


const playBtn = document.getElementById("playBtn")
console.log(playBtn);

playBtn.addEventListener("click",function() {
        const difficultySelection = document.getElementById("difficulty").value;
        console.log(difficultySelection);
    }
);

// let numCellxDiff = cells;
// if (difficultySelection === "medium") {
//     numCellxDiff = cellsMedium;    
// } else if (difficultySelection === "difficult") {
//     numCellxDiff = cellsDifficult;
// }
