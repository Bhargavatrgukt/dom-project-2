let allRightSymbol = document.getElementById("all-right");
let oneRightSymbol = document.getElementById("one-right");
let allLeftSymbol = document.getElementById("all-left");
let oneLeftSymbol = document.getElementById("one-left");


let container1 = document.querySelector(".container1 ul");
let container2 = document.querySelector(".container2 ul");

let section=document.getElementById("section")

function updateUI() {

  allRightSymbol.disabled = container1.children.length === 0;
  allLeftSymbol.disabled = container2.children.length === 0;


  const hasCheckedInContainer1 = container1.querySelector("input:checked") !== null;
  const hasCheckedInContainer2 = container2.querySelector("input:checked") !== null;

  oneRightSymbol.disabled = !hasCheckedInContainer1;

  oneLeftSymbol.disabled = !hasCheckedInContainer2;
}


function moveSelectedItems(sourceContainer, targetContainer) {
  Array.from(sourceContainer.querySelectorAll("input:checked")).forEach((input) => {
    const parentLi = input.parentElement;
    targetContainer.appendChild(parentLi);
    input.checked = false;
  });
  updateUI();
}


function moveAllItems(sourceContainer, targetContainer) {
  Array.from(sourceContainer.children).forEach((child) => {
    targetContainer.appendChild(child);
  });
  updateUI();
}


oneRightSymbol.addEventListener("click", () => moveSelectedItems(container1, container2));
oneLeftSymbol.addEventListener("click", () => moveSelectedItems(container2, container1));
allRightSymbol.addEventListener("click", () => moveAllItems(container1, container2));
allLeftSymbol.addEventListener("click", () => moveAllItems(container2, container1));




section.addEventListener("change",updateUI)


updateUI();
