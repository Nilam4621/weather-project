const searchbar = document.getElementById("searchbar");
const button = document.getElementById("button");
const input= document.getElementById("city");
const btn = document.getElementById("btn");

const cityName=document.getElementById("cityName");
const cityTime=document.getElementById("cityTime");
const cityTemp=document.getElementById("cityTemp");

button.addEventListener("mouseenter", ()=>{
searchbar.classList.add("hovered");
});

button.addEventListener("mouseleave", ()=>{
    searchbar.classList.remove("hovered");
});

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=7a211e96362647a7bc463805251605&q=${cityName}&aqi=yes`
);
return await promise.json();
};


button.addEventListener('click',async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    
});

function getlocation(position) {
    console.log(position);
}

function failedtoget() {
    console.log("There was some issue");
}

btn.addEventListener("click",async () =>{
navigator.geolocation.getCurrentPosition(getlocation, failedtoget)
});