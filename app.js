// // get the container div
// const container= document.querySelector(".container");

// get the search area
const search = document.getElementById('search');

let userInput = 'Bordeaux';

// add an event listener on enter button press
search.addEventListener('keyup', (e) => {
  e.keyCode === 13 ? (userInput = search.value) : '';
});

async function fetchData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=afbfe6a91c7a12e3a8b91f464b95dbbb`,
    { mode: 'cors' }
  );
  try {
    const getData = await response.json();
    console.log(getData);
    console.log(getData.weather[0].description);
    const apiObject = {
      city: userInput,
      country: getData.sys.country,
      temp: getData.main.temp,
      feels: getData.main.feels_like,
      description: getData.weather[0].description,
      humidity: getData.main.humidity,
    };

    console.log(apiObject);
  } catch {
    console.log("Oops. Couldn't find that.");
  }
}
fetchData();
