const cityForm = document.querySelector('form');

const updateCity = async (city)=>{
    // console.log(city)
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets);

    return {
        cityDets: cityDets,
        weather: weather
    };
};

cityForm.addEventListener('submit', e =>{
    e.preventDefault();
    
    // get cityValue
    const city = cityForm.city.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});