// async function getCats() {
//     const response = await fetch(
//       'https://api.giphy.com/v1/gifs/translate?api_key=ShwQz1yuFlZwCalQ6bPu2O53jS1GC80E&s=dogs',
//       {
//         mode: 'cors',
//       }
//     );
//     const catData = await response.json();
//     img.src = catData.data.images.original.url;
//   }
//   getCats();

async function fetchData() {
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=London&appid=afbfe6a91c7a12e3a8b91f464b95dbbb',
    { mode: 'cors' }
  );
  const apiObject = await response.json();
  console.log(apiObject);
  console.log(apiObject);
}
fetchData();
