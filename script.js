const chuckNorrisFactZone = document.querySelector(".chuckNorrisFactZone");
const selectAValueBar = document.querySelector(".selectAValueBar");
const selectedValue = document.querySelector('option[value]');


function displayFact(fact) {
  chuckNorrisFactZone.innerHTML = `<p>${fact}</p>`;
};


function handleClick() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const chuckNorrisFact = data.value;
      displayFact(chuckNorrisFact);
    })
    .catch(error => {
      console.log(error);
    });
}


const myButton = document.getElementById("myButton");
myButton.addEventListener("click", handleClick);

// Clear the chuckNorrisFactZone when the page loads (from internet)
document.addEventListener("DOMContentLoaded", () => {
  chuckNorrisFactZone.innerHTML = "";
});
