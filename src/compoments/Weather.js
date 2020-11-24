import React, { Component } from 'react'
import SearchBox from './SearchBox'
import DispalyWeather from './DispalyWeather'
import ClearDay from '../images/01d.svg'
import Clouds from '../images/04n.svg'
import PartlyCloudy from '../images/02d.svg'
import Thunderstom from '../images/11d.svg'
import Drizzle from '../images/drizzle.svg'
import Rain from '../images/09n.svg'
import Atmosphere from '../images/50d.svg'
import Snow from '../images/snow.svg'  
import SunRise from '../images/sunrise.svg'
import SunSet from '../images/sunset.svg'


import ReactAnimatedWeather from 'react-animated-weather';

export class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            city: '',
            temp: '36',
            sunRise: '',
            sunSet: '',
            desc: '',
            date: '',
            icon: '',
            main: false,
            showBtn: false,
            AM: 'am',
            PM: 'pm'
        }

        this.onKeyUp = this.onKeyUp.bind(this);

      
    }

    onKeyUp = (event) => {
        if (event.charCode === 13) {
         console.log("Enter is clicked")
         this.getWeatherData()
              
          
        }
    }


    get_weatherIcons = ( rangeId) => {
        switch(true){
            case rangeId >= 200 && rangeId <= 232:
                this.setState({icon:Thunderstom});
                break;
                case rangeId >= 300 && rangeId <= 321:
                this.setState({icon:Drizzle});
                break;
                case rangeId >= 500 && rangeId <= 531:
                this.setState({icon:Rain});
                break;
                case rangeId >= 600 && rangeId <= 622:
                this.setState({icon:Snow});
                break;
                case rangeId >= 701 && rangeId <= 781:
                this.setState({icon:Atmosphere});
                break;
                case rangeId === 800:
                this.setState({icon:ClearDay});
                break;
                case rangeId >= 801 && rangeId <= 804:
                this.setState({icon: Clouds});
                break;
                default:
                this.setState({icon: Clouds});

        }

    }

    input = (e) => {
        this.setState({ 
            inputValue: e.target.value,
            showBtn: true });
        
    }

    getWeatherData = () => {
        var title = this.state.inputValue
           
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + title + '&appid=d907417568731558c71b57f62473318d')
            .then(reponse => reponse.json())
            .then(data => {
                console.log(data)
              
                this.setState({
                  city: data.name,
                  date: this.date(),
                  temp: this.calTemperature(data.main.temp),
                  sunRise: this.calTime(data.sys.sunrise, this.state.AM),
                  sunSet: this.calTime(data.sys.sunset, this.state.PM),
                  desc: data.weather[0].description,
                  main: true,
                });
                
                this.get_weatherIcons( data.weather[0].id)
                
                
                
            })
        
       
    }

    date = () => {
        var date = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dateValue = date.getDate();
        var yearValue = date.getFullYear();
         var formmatedDate = days[date.getDay()] +" " +dateValue +" " +months[date.getMonth()]  + " " +yearValue
         return formmatedDate;
    }

    calTemperature = (temperature) => {
        var tempValue = Math.floor(temperature - 273);
        return tempValue
    }

    calTime = (timestamp, mid) =>{
        var date;
      
        date = new Date(timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        // var mid = 'am';
       
        if (hours > 12)
          {
              hours = hours%12;
              mid = 'pm';
          }
          if(hours == 0)
          {
              hours = 12;
          }
          else if(hours > 12)
          {
              hours = hours%12;
            //   mid = 'pm';
          }

        

       
        
          var formattedtime = hours + ":" + minutes.substr(-2) + mid; ;
        return formattedtime;
    }


    render() {
        return (
            <div>
                <SearchBox
                    value={this.state.inputValue}
                    onChange={e => this.input(e)}
                    onClick={this.getWeatherData}
                    onKeyPress={this.onKeyUp} 
                    showBtn={this.state.showBtn} />

                <DispalyWeather
                    cityName={this.state.city}
                    weather_icon={this.state.icon}
                    weather_desc={this.state.desc}
                    weather_temp={this.state.temp}
                    sunRise={this.state.sunRise}
                    sunSet={this.state.sunSet}
                    date={this.state.date}
                    main={this.state.main}
                    iconSunSet={SunSet}
                    iconSunRise={SunRise}
                    />

                


            </div>
        )
    }
}

export default Weather

