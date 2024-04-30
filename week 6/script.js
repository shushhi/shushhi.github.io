// const myHeading = document.querySelector("p");
// console.log(myHeading);
// console.log(myHeading.textContent);
// console.log(myHeading.innerHTML);
// myHeading.style.backgroundColor = "limegreen";
// // myHeading.textContent = "This is a new paragraph";

// const allMyPara = document.querySelectorAll("p");
// console.log(allMyPara);

// for (let i=0; i<3; i++)
// {
//     allMyPara[i].style.backgroundColor ="lightblue"
// }

// allMyPara.forEach(changeColor);
// function changeColor (item) {
//     console.log(item.classList);
//     item.classList.add("lime-box");
//     // item.classList.remove ("inner")
//     // item.style.backgroundColour = "pink";
// }


const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", toggleImage);

function toggleImage() {
    const myImage = document.querySelector("#my-image");
    console.log(myImage.dataset.catname);
    const myPara = document.querySelector("#greet");
    myPara.textContent = "Hi I am " + myImage.dataset.catname;
    // console.log(myImage);
    myImage.classList.toggle("round");   
}
// myButton.textContent ="click me";
// myImage.classList.add("round");

function filterTopic() {
    const myPara = document.querySelectorAll("p");
    myPara.forEach(displayTopic);
    function displayTopic(item) {
        if(item.dataset.topic==="noweb") {
//             // item.style.backgroundColor = "limegreen";
//         } else if (item.dataset.topic === "sound") {
//             item.style.backgroundColor = "coral";
//         }
//     }
// }