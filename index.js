  const clickElement = document.getElementById("clickElement");
  const counters = document.getElementById("counters");

  const save = document.getElementById("saveButton");
  const reset = document.getElementById("resetButton");

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



setInterval(() => {
    saveGame();
    console.log("Game auto-saved")}, 15000);

 loadGame();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Initialize the counters

  function formatBones(count) {
  if (count >= 1000000000000000000000000000) return (count / 1000000000000000000000000000).toFixed(1).replace(/\.0$/, "") + "N";
  if (count >= 1000000000000000000000000) return (count / 1000000000000000000000000).toFixed(1).replace(/\.0$/, "") + "Oc";
  if (count >= 1000000000000000000000) return (count / 1000000000000000000000).toFixed(1).replace(/\.0$/, "") + "Sp";
  if (count >= 1000000000000000000) return (count / 1000000000000000000).toFixed(1).replace(/\.0$/, "") + "Sx";
  if (count >= 1000000000000000) return (count / 1000000000000000).toFixed(1).replace(/\.0$/, "") + "Q";
  if (count >= 1000000000000) return (count / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T";
  if (count >= 1000000000) return (count / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  if (count >= 1000000) return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (count >= 1000) return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return count;
}

// Update all bonesCounter.innerText assignments:
bonesCounter.innerText = `Bones: ${formatBones(count)}`;

// Example usage in click handler:
clickElement.addEventListener("click", (e) => {
  count += 1;
  updateBonesCounter();

  // Create the +1 element
  const plusOne = document.createElement("span");
  plusOne.innerText = "+1";
  plusOne.className = "plus-one";

  // Position it at the mouse click (relative to .center-area)
  const parentRect = clickElement.parentElement.getBoundingClientRect();
  plusOne.style.left = (e.clientX - parentRect.left) + "px";
  plusOne.style.top = (e.clientY - parentRect.top) + "px";

  // Add to the .center-area container
  clickElement.parentElement.appendChild(plusOne);

  // Animate and remove after animation
  setTimeout(() => {
    plusOne.style.transform = "translateY(-40px)";
    plusOne.style.opacity = "0";
  }, 10);
  setTimeout(() => {
    plusOne.remove();
  }, 800);
});

function updateBonesCounter() {
  bonesCounter.innerText = `Bones: ${formatBones(count)}`;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// Skeleton upgrade

  upgrade1.addEventListener("click", () => {
    if (count >= skeletonCost) {
        count -= skeletonCost;
        updateBonesCounter();
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
updateBonesCounter();
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
updateBonesCounter();
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
updateBonesCounter();
        }
    }, 1000);

    setInterval(() => {
        if (zombies > 0) {
            count += zombies * 10;
updateBonesCounter();
        }
    }, 1000);

    setInterval(() => {
        if (ghouls > 0) {
            count += ghouls * 100;
updateBonesCounter();
        }
    }, 1000);

reset.addEventListener("click", () => {
    localStorage.removeItem("clickerSave");
     count = 0;
    skeletons = 0;
    skeletonCost = 10;
    zombies = 0;
    zombieCost = 100;
    ghouls = 0;
    ghoulCost = 1000;
    
    updateBonesCounter();
    skeletonCounter.innerText = `Skeletons: ${skeletons}`;
    skeletonCostDisplay.innerText = `Cost: ${skeletonCost}`;
    zombieCounter.innerText = `Zombies: ${zombies}`;
    zombieCostDisplay.innerText = `Cost: ${zombieCost}`;
    ghoulCounter.innerText = `Ghouls: ${ghouls}`;
    ghoulCostDisplay.innerText = `Cost: ${ghoulCost}`;
    alert("Game reset!");
  });
