const key = 'nbpPNlkAi6yQnSnHdL6VKQd7F6eWTLcE'

const getCity =  async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query)
    const data = await response.json();

};
