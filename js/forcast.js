const key = 'nbpPNlkAi6yQnSnHdL6VKQd7F6eWTLcE'
// * weather getter func
const getWeather = async (id) => {

  const base = "http://dataservice.accuweather.com/currentconditions/v1/"
  const query = `${id}?apikey=${key} `

}


// * city getter func
const getCity =  async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query)
    const data = await response.json();
    return data[0];
};


getCity("tehran")
.then(data =>console.log(data))
.catch(err => console.log(err))