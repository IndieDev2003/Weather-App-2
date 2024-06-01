const apiKey="2fd4bea6b31504271112e3037caf5269"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="

const currentImg= document.querySelector("#weather-img")
const cityName= document.querySelector("#city-name")
const humidityPer= document.querySelector("#humidity-percentage")
const windSpeed=document.querySelector("#wind-speed")
const currentTemp=document.querySelector(".temp")
var city=document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")


searchBtn.addEventListener("click", ()=>{
    CheckWeather(city.value)
    console.log(city.value)
})

async function CheckWeather(cityNM){

    let cityc=cityNM
    if(cityc===""){
        cityc="Faridabad"
    }
    
    const response = await fetch(apiUrl+cityc+"&appid="+apiKey+"&units=metric")
    var res= await response.json()
    console.log(res)

    currentTemp.innerHTML=Math.round(res.main.temp)+"°C"
    windSpeed.innerHTML=res.wind.speed+" Km/h"
    cityName.innerHTML=res.name
    humidityPer.innerHTML=res.main.humidity+" %"

    if(res.weather[0].main==="Clear"){
        console.log("Haze or Clear")
        currentImg.src="images/clear.png"

    }else if(res.weather[0].main==="Rain"){
        console.log("Its Rainy")
        currentImg.src="images/rain.png"
    }else if(res.weather[0].main==="Clouds"){
        console.log("Its Cloudy")
        currentImg.src="images/clouds.png"
    }else if(res.weather[0].main==="Snow"){
        console.log("Its Snow")
        currentImg.src="images/snow.png"
    }else if(res.weather[0].main==="Mist"){
        console.log("Its Rainy")
        currentImg.src="images/mist.png"
    }
    else if(res.weather[0].main==="Drizzle"){
        console.log("Its Rainy")
        currentImg.src="images/drizzle.png"
    }
}
CheckWeather();