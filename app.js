// // get the container div
// const container= document.querySelector(".container");

// get the search area
const search = document.getElementById('search');

let userInput = 'Bordeaux';

// add an event listener on enter button press
search.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    userInput = search.value;
    fetchData();
  } else {
  }
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
      error: getData.cod.message,
    };
    // write the data
    document.querySelector(
      '#city'
    ).textContent = `${apiObject.city.toUpperCase()}, ${apiObject.country}`;
    document.querySelector('#temp').textContent = apiObject.temp;
    document.querySelector(
      '#feels'
    ).textContent = `Feels like: ${apiObject.feels}`;
    document.querySelector('#description').textContent = apiObject.description;
    document.querySelector(
      '#humidity'
    ).textContent = `Humidity: ${apiObject.humidity}`;
    console.log(apiObject);
  } catch {
    console.log("Oops. Couldn't find that.");
    document.querySelectorAll('.para').forEach((item) => {
      item.textContent = ' ';
      document.querySelector('#city').textContent = 'City not found.';
    });
  }
}
fetchData();
