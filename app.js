class Wasp {
  constructor(name, hitPoints, damage) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.damage = damage;
  }

  getsHit() {
    this.hitPoints = this.hitPoints - this.damage;
  }

  get html() {
    return `<div>
            <p>${this.name}</p>
            <p>${this.hitPoints}</p>
        </div>`;
  }
}

class Queen extends Wasp {
  constructor() {
    super("Queen", 80, 7);
  }
}

class Worker extends Wasp {
  constructor() {
    super("Worker", 68, 10);
  }
}

class Drone extends Wasp {
  constructor() {
    super("Drone", 60, 12);
  }
}

let wasps = [];

const createWasps = () => {
  wasps.push(new Queen());

  for (i = 0; i < 5; i++) {
    wasps.push(new Worker());
  }

  for (i = 0; i < 8; i++) {
    wasps.push(new Drone());
  }
};

createWasps();

const updateWasps = () => {
  document.querySelector(".container").innerHTML = "";
  wasps.forEach(wasp => {
    document.querySelector(".container").innerHTML += wasp.html;
  });
};

updateWasps();


document.getElementById("HitButton").addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * wasps.length);
  let randomWasp = wasps[randomNumber];
  randomWasp.getsHit();
  console.log(randomNumber, randomWasp.hitPoints);
  if (wasps[0].hitPoints <= 0) {
      wasps.splice(0, wasps.length);
  } else if (randomWasp.hitPoints <= 0) {
      wasps.splice(randomNumber, 1);
  } 
  updateWasps();
});


//game reset function not working

document.getElementById("Reset").addEventListener("click", () => {
    
});