const cityForm = document.querySelector('form');

const updateCity = async (city)=>{
    console.log(city)
}

cityForm.addEventListener('submit', e =>{
    e.preventDefault();
    
    // get cityValue
    const city = cityForm.city.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(city);
})