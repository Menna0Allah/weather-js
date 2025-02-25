const apikey = "9e2300a4b0064e2682e105942252502";
const w_url = "http://api.weatherapi.com/v1/current.json?q=";

const search_btn = document.querySelector('.search-cont button');
const search_input = document.querySelector('.search-cont input');

async function weather(city){
    const response = await fetch(w_url + city + `&key=${apikey}`);

    if(response.status == 400){
        document.querySelector(".location p").innerHTML = `this country isn't found yet !`
    }else{
        
        let data = await response.json();
    
        console.log(data);
        document.querySelector(".logo-text p").innerHTML = data.location.localtime;
        document.querySelector(".location p").innerHTML = `${data.location.name}, ${data.location.country}`;
        document.querySelector(".weather-temp p").innerHTML = 
        data.current.temp_c + '°C';
        document.querySelector(".humidity .per").innerHTML = 
        data.current.humidity + '%';
        document.querySelector(".wind-speed .per").innerHTML = 
        data.current.wind_mph + 'mph';
    
        document.querySelector('.today-w-icon').src = data.current.condition.icon;
    }


}

search_btn.addEventListener("click" , () => {
    document.querySelector(".weather-card").style.visibility = "visible";
    weather(search_input.value);
});

console.log();
