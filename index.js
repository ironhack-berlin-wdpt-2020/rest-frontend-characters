

function getCountryInfo(countryName) {


  axios
    .get("https://restcountries.eu/rest/v2/name/" + countryName)
    .then((responseFromAPI) => {
      console.log("Response from API is: ", responseFromAPI.data)
      document.getElementById('countryName').innerText = responseFromAPI.data[0].name
      document.getElementById('countryCapital').innerText = responseFromAPI.data[0].capital
    })
    .catch(err => console.log("Error is: ", err));

}

// DOM selector document.getElementById("theButton")
document.getElementById("theButton").onclick = function () {

  const country = document.getElementById("theInput").value;
  getCountryInfo(country); // executes the function getCountryInfo

};


// document.getElementById("post-wall-e").onclick = () => {
//   // Create an object with data to submit
//   const characterInfo = {
//     name: "WALL-E",
//     occupation: "Waste Allocation Robot",
//     weapon: "cuteness 2"
//   };
//   // Make a POST request
//   axios
//     .post("https://ih-crud-api.herokuapp.com/characters", characterInfo)
//     .then(response => console.log("post successful and the response is: ", response))
//     .catch(error => console.log("Oh No! Error is: ", error));
// };

document.getElementById('character-form').onsubmit = (event) => {
  event.preventDefault()

  let name = document.getElementById('the-name-input').value
  let occupation = document.getElementById('the-occupation-input').value
  let weapon = document.getElementById('the-weapon-input').value

  axios
    .post("https://ih-crud-api.herokuapp.com/characters", {
      name: name,
      occupation: occupation,
      weapon: weapon
    }).then((response) => {
      console.log("post successful and the response is: ", response)
    })
}

// axios.get(`https://ih-crud-api.herokuapp.com/characters/${idNumber}`)