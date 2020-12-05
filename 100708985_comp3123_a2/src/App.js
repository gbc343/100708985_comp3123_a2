import React, {Component} from 'react';

import axios from 'axios';
import app from "./App.css"

export default class WeatherReport extends Component {
  state = {
    content: { coord: "",
     base: "" , 
     weather:"",
     main: "",
     visibility:"",
     wind:"",
     clouds:"",
     dt:"",
     sys:"",
     timezone:"",
     id:"",
     name:"",
     cod:"",
     icon:"",
     description:""


    
    }
  }

  componentDidMount() {
    
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=dfb65f61a4833c80d74b93a817b21ceb"
      )
      .then(res => {
        this.setState({
          content: { 
             coord: res.data.coord,
             base: res.data.base,
             weather:res.data.weather,
             main: res.data.main,
             visibility: res.data.visibility,
             wind: res.data.wind,
             clouds: res.data.clouds,
             dt: res.data.dt,
             sys: res.data.sys,
             timezone: res.data.timezone,
             id: res.data.id,
             name: res.data.name,
             cod: res.data.cod,
             icon:res.data.weather[0].icon,
             description:res.data.weather[0].description
             }
        });
      });
    


  
  }

  /*

  */

  render() {
    console.log(this.state.content.coord);
    console.log(this.state.content.weather);
    console.log(this.state.content.main);
    
    const n = [this.state.content.weather];
    console.log(n)
    return (
<div class="container" style={{backgroundColor: "lightblue",alignContent:"center" }}>

       

<h1 style={{width:"100%", backgroundColor: "green", textAlign:"center"}}>Current Weather</h1>

<table style={{width:"100%", backgroundColor: "lightgreen", alignContent:"center" }}>


<ul style={{backgroundColor:"grey", borderstyle:"solid"}}>
    <tr style={{width:"100%"}}>
        <th style={{borderStyle:"solid", borderColor: "black", backgroundColor:"grey" ,width:"100%"}}>{this.state.content.name}, ON {(new Date(this.state.content.timezone)).toLocaleTimeString()} , {this.state.content.main.temp} °C </th>
    </tr>
    
  


    <tr>
    <td style={{display:"inline-block", alignContent:"center"}}><img className="img-fluid" alt="Girl in a jacket" src={`http://openweathermap.org/img/w/${this.state.content.icon}.png`} width="100" height="100
"/></td>
    <tr>
    <td style={{ display:"inline-block",alignContent:"left"}}>
        <tr>Current Temperature:   {this.state.content.main.temp}</tr>
        <tr>Feels Like:   {this.state.content.main.feels_like} °C</tr>
        <tr>Clouds:   {this.state.content.clouds.all}%</tr>
        <tr>Temp Min:   {this.state.content.main.temp_min} °C</tr>
        <tr>Temp Max   {this.state.content.main.temp_max} °C</tr>
        </td>  
        </tr>
     
      <tr>
        <td style={{ display:"inline-block", alignContent:"left"}}>
        <tr>Weather Description:   {this.state.content.description}</tr>
        <tr>Humidity:   {this.state.content.main.humidity} %</tr>
        <tr>Clouds:   {this.state.content.clouds.all}%</tr>
        <tr>Wind:   {this.state.content.wind.speed} meter/sec</tr>
        <tr>Temp Max   {this.state.content.main.temp_max} °C</tr>
        </td>  
        </tr>
        </tr>
        

    </ul>
</table>



      </div>
    );
    }
  
}




/*
<header>


</header>
<h2 className="blue-text">{this.state.content.name}, ON {this.state.content.timezone} {this.state.content.main.temp}</h2>
<div className="main">
<h3>Current Temperature: {this.state.content.main.temp}</h3>
<h3>Feels Like: {this.state.content.main.feels_like}</h3>
<h3>Clouds: {this.state.content.clouds.all}</h3>

</div>
<p>{this.state.content.icon}</p>
<p>{this.state.content.icon}</p>

<img className="img-fluid" alt="Girl in a jacket" src={`http://openweathermap.org/img/w/${this.state.content.icon}.png`} width="100" height="100
"/>


<footer>

</footer>
*/