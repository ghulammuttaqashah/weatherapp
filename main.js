const api_key = "2d56cb4f1d637c4d300184569171b3b1";

let city;
let response;
let data;

let getWeather = async () => {
    city = document.getElementById("txt").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    try
    {
        response = await fetch(url);
        if(!response.ok)
            {
               alert("API response "+response.status);
            }
    }
    catch(e)
    {
        alert("Unable to fetch weather data"+ e);
    }



    data = await response.json();
    console.log(response);
    display(data);
    
};

function display(data)
{
    //Image ICON
    let icon=document.createElement('img');
    let iconCode=data.weather[0].icon;
    let iconurl=`http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    icon.src=iconurl;
    icon.alt="Weather Image";
    icon.style.alignSelf="center";

    //Main Div creation
    let main=document.getElementById("weather");
    main.innerHTML = "";

    //temperature
    let tempkelvin=data.main.temp;
    let tempcelsius=tempkelvin - 273.15;
    let h2=document.createElement("h2");
    h2.innerText=tempcelsius.toFixed(0) + " °C";
    h2.style.alignSelf="center";
    h2.style.color="#333333";

    //Name
    let name=document.createElement("h2");
    name.style.alignSelf="center";
    name.innerText=data.name;
    name.style.color="#333333";
    name.style.fontSize="20px";

    //description
    let descr=document.createElement("p");
    descr.style.alignSelf="center";
    descr.innerText=data.weather[0].description;
    descr.style.color="#333333";
    descr.style.fontSize="20px";

    //adding in div
    main.append(icon);
    main.append(h2);
    main.append(name);
    main.append(descr);
}



