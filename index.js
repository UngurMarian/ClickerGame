  const clickElement = document.getElementById("clickElement");
  const counters = document.getElementById("counters");

const save = document.getElementById("saveButton");

  const bonesCounter = document.getElementById("bonesCounter");

  let count = 0;

  const skeletonCounter = document.getElementById("skeletonCounter");
  const upgrade1 = document.getElementById("upgrade1");
  const skeletonCostDisplay = document.getElementById("skeletonCost");

  let skeletons = 0;
  let skeletonCost = 10;

  const zombieCounter = document.getElementById("ZombieCounter");
  const upgrade2 = document.getElementById("upgrade2");
  const zombieCostDisplay = document.getElementById("ZombieCost");

  let zombies = 0;
  let zombieCost = 100;

  const ghoulCounter = document.getElementById("GhoulCounter");
  const upgrade3 = document.getElementById("upgrade3");
  const ghoulCostDisplay = document.getElementById("GhoulCost");

  let ghouls = 0;
  let ghoulCost = 1000;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function saveGame() {
  const gameData = {
    count,
    skeletons,
    skeletonCost,
    zombies,
    zombieCost,
    ghouls,
    ghoulCost
  };
  localStorage.setItem("clickerSave", JSON.stringify(gameData));
}

function loadGame() {
  const saved = localStorage.getItem("clickerSave");
  if (saved) {
    const gameData = JSON.parse(saved);
    count = gameData.count;
    skeletons = gameData.skeletons;
    skeletonCost = gameData.skeletonCost;
    zombies = gameData.zombies;
    zombieCost = gameData.zombieCost;
    ghouls = gameData.ghouls;
    ghoulCost = gameData.ghoulCost;

    bonesCounter.innerText = `Bones: ${count}`;
    skeletonCounter.innerText = `Skeletons: ${skeletons}`;
    skeletonCostDisplay.innerText = `Cost: ${skeletonCost}`;
    zombieCounter.innerText = `Zombies: ${zombies}`;
    zombieCostDisplay.innerText = `Cost: ${zombieCost}`;
    ghoulCounter.innerText = `Ghouls: ${ghouls}`;
    ghoulCostDisplay.innerText = `Cost: ${ghoulCost}`;
  }
}

save.addEventListener("click", () => {
    saveGame();
    alert("Game saved!");
});

 loadGame();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Initialize the counters

  clickElement.addEventListener("click", () => {
    count += 1;
    bonesCounter.innerText = `Bones: ${count}`;
  });

////////////////////////////////////////////// Skeleton upgrade

  upgrade1.addEventListener("click", () => {
    if (count >= skeletonCost) {
        count -= skeletonCost;
        bonesCounter.innerText = `Bones: ${count}`;
        skeletons += 1;
        skeletonCounter.innerText = `Skeletons: ${skeletons}`;
        skeletonCost = Math.round(skeletonCost * 1.15);
        skeletonCostDisplay.innerText = `Cost: ${skeletonCost}`;
    } else {
        upgrade1.style.backgroundColor = "red";
        setTimeout(() => {
            upgrade1.style.backgroundColor = "";
        }, 200);
    }
  });

///////////////////////////////////////////// Zombie upgrade
  upgrade2.addEventListener("click", () => {
    if (count >= zombieCost) {
        count -= zombieCost;
        bonesCounter.innerText = `Bones: ${count}`;
        zombies += 1;
        zombieCounter.innerText = `Zombies: ${zombies}`;
        zombieCost = Math.round(zombieCost * 1.15);
        zombieCostDisplay.innerText = `Cost: ${zombieCost}`;
    } else {
        upgrade2.style.backgroundColor = "red";
        setTimeout(() => {
            upgrade2.style.backgroundColor = "";
        }, 200);
    }
  });

///////////////////////////////////////////// Ghoul upgrade

  upgrade3.addEventListener("click", () => {
    if (count >= ghoulCost) {
        count -= ghoulCost;
        bonesCounter.innerText = `Bones: ${count}`;
        ghouls += 1;
        ghoulCounter.innerText = `Ghouls: ${ghouls}`;
        ghoulCost = Math.round(ghoulCost * 1.15);
        ghoulCostDisplay.innerText = `Cost: ${ghoulCost}`;
    } else {
        upgrade3.style.backgroundColor = "red";
        setTimeout(() => {
            upgrade3.style.backgroundColor = "";
        }, 200);
    }
  });

    setInterval(() => {
        if (skeletons > 0) {
            count += skeletons;
            bonesCounter.innerText = `Bones: ${count}`;
        }
    }, 1000);

    setInterval(() => {
        if (zombies > 0) {
            count += zombies * 10;
            bonesCounter.innerText = `Bones: ${count}`;
        }
    }, 1000);

    setInterval(() => {
        if (ghouls > 0) {
            count += ghouls * 100;
            bonesCounter.innerText = `Bones: ${count}`;
        }
    }, 1000);