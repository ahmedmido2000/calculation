let btnSecondaryOne =document.getElementById("btnSecondaryOne")
let btnSecondaryTwo =document.getElementById("btnSecondaryTwo")
let btnSecondaryThree =document.getElementById("btnSecondaryThree")
let secondarySectionOne= document.querySelector(".secondary-one")
let secondarySectionTwo= document.querySelector(".secondary-two")
let secondarySectionThree= document.querySelector(".secondary-three")

function secondaryOneFunction(){
    btnSecondaryOne.classList.add("btn-primary")
    btnSecondaryOne.classList.add("text-white")
    btnSecondaryTwo.classList.remove("btn-primary")
    btnSecondaryTwo.classList.remove("text-white")
    btnSecondaryThree.classList.remove("btn-primary")
    btnSecondaryThree.classList.remove("text-white")

    secondarySectionOne.classList.remove("d-none")
    secondarySectionTwo.classList.add("d-none")
    secondarySectionThree.classList.add("d-none")
}

function secondaryTwoFunction(){
    btnSecondaryTwo.classList.add("btn-primary")
    btnSecondaryTwo.classList.add("text-white")
    btnSecondaryOne.classList.remove("btn-primary")
    btnSecondaryOne.classList.remove("text-white")
    btnSecondaryOne.classList.add("text-primary")
    btnSecondaryThree.classList.remove("btn-primary")
    btnSecondaryThree.classList.remove("text-white")

    secondarySectionTwo.classList.remove("d-none")
    secondarySectionOne.classList.add("d-none")
    secondarySectionThree.classList.add("d-none")
}

function secondaryThreeFunction(){
    btnSecondaryThree.classList.add("btn-primary")
    btnSecondaryThree.classList.add("text-white")
    btnSecondaryTwo.classList.remove("btn-primary")
    btnSecondaryTwo.classList.remove("text-white")
    btnSecondaryOne.classList.remove("btn-primary")
    btnSecondaryOne.classList.add("text-primary")
    btnSecondaryOne.classList.remove("text-white")

    secondarySectionTwo.classList.add("d-none")
    secondarySectionOne.classList.add("d-none")
    secondarySectionThree.classList.remove("d-none")
}


let popUp = document.querySelector(".pop-up")
let overlay = document.querySelector(".overlay")
function showPopUp(){
    popUp.classList.remove("d-none")
    overlay.classList.remove("d-none")
}
function hidePopUp(){
    popUp.classList.add("d-none")
    overlay.classList.add("d-none")
}
overlay.addEventListener("click", () => {
    popUp.classList.add("d-none")
    overlay.classList.add("d-none")
  });
  




let filterPage= document.querySelector(".filter-page")
let resultsPage= document.querySelector(".results-page")
function goToResults(){
    popUp.classList.add("d-none")
    overlay.classList.add("d-none")
    resultsPage.classList.remove("d-none")
    filterPage.classList.add("d-none")
}

let boysBtn = document.getElementById("boysBtn")
let girlsBtn = document.getElementById("girlsBtn")
let boys = document.querySelectorAll(".boys")
let girls = document.querySelectorAll(".girls")

function showBoys(){
    boysBtn.classList.add("btn-primary")
    boysBtn.classList.add("text-white")
    girlsBtn.classList.add("text-primary")
    girlsBtn.classList.remove("text-white")
    girlsBtn.classList.remove("btn-primary")
    boys.forEach((boy)=>{
        boy.style.display="flex"
    })
    girls.forEach((boy)=>{
        boy.style.display="none"
    })
}

function showGirls(){
    girlsBtn.classList.add("btn-primary")
    girlsBtn.classList.add("text-white")
    boysBtn.classList.remove("btn-primary")
    boysBtn.classList.add("text-primary")
    boysBtn.classList.remove("text-white")
    girls.forEach((boy)=>{
        boy.style.display="flex"
    })
    boys.forEach((boy)=>{
        boy.style.display="none"
    })
}

    // Function to toggle fill/empty behavior
    function toggleFill() {
        // Select all enabled inputs within the active secondary section
        let activeSection = document.querySelector('.filter-page'); // Example: Adjust based on active section
        if (!activeSection) return; // Ensure active section is found

        let inputs = activeSection.querySelectorAll('input:not([disabled])');

        inputs.forEach(input => {
            if (input.value === '') {
                input.value = '100';
            } else {
                input.value = '';
            }
        });
    }