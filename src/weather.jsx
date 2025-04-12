import { useState } from "react"
import axios from "axios"
import "./style.css"

function Weather()
{
    const [city,setcity] = useState("")
    const [weather,setweather]=useState("")
    const [temp,settemp] =useState("")
    const [desc,setdesc] = useState("")

    const handlecity = (evt)=>
    {
        setcity(evt.target.value)
    }

    const getWeather=()=>
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73f8ade1fce0adfc173f9c06f756de75`)

        weatherData.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
    .catch(function()
    {
     alert("City is not Found. Please enter valid city Name.") 
    })
    }

    return(
        
       
        <div className="flex justify-center mt-20">
            <div className="bg-[#EFEFEF] p-10 w-96 rounded-md flex justify-center">
                <div className="flex flex-col gap-2 ">
                    <h1 className="font-medium text-3xl">🌦️Weather Report</h1>
                    <p>Get Your Latest Weather Updates For Your City !!</p>
                    <input onChange={handlecity} className="p-3 cursor-pointer w-72 bg-transparent border rounded-md" type="text" placeholder="Enter Your City Name"/>
                    <button onClick={getWeather} className="border rounded-md p-3 w-72 bg-[#189BCB] cursor-pointer hover:bg-[#0A4785] duration-700">Get Report</button>

                    <div className="w-72 border rounded-md p-3 mt-6 bg-[#4988B7]">
                        <h1>🌈Weather: {weather}</h1>
                        <p>🌡️Temperature:{temp}</p>
                        <p>📝Description: {desc}</p>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Weather