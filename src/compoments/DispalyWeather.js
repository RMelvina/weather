import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

function DispalyWeather(props) {
    // const defaults = {
    //     clearDay: 'CLEAR_DAY',
    //     rain: 'RAIN',
    //     partlyCloudy: 'PARTLY_CLOUDY_DAY',
    //     clearNight: 'CLEAR_NIGHT',
    //     cloudy: 'CLOUDY',
    //     sleet: 'SLEET',
    //     snow: 'SNOW',
    //     wind: 'WIND',
    //     fog: 'FOG',

    //     // color: 'goldenrod',
    //     // size: 100,
    //     // animate: true
    // };

    return (

        // style={{
        //     visibility: props.main ? 'visible' : 'hidden'
        // }}
        <section className="container-fluid" >
            
            <div className="row justify-content-center  mt-5">
                <div className="col-lg-6 col-md-8 col-sm-8 col-12 weather-container">
                <h1>{props.cityName}</h1>
                
                <div className="container">
              
              <div className="container d-flex justify-content-center">
              
              <div className="row tempAndDecsContainer align-items-center justify-content-center ">
                    <div className=" pr-5 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center ">
                        <h1 className="temp-font-size ">{props.weather_temp}</h1>
                        <span >&#8451;</span>
                    </div>
                

               
              
                    <div className=" pl-5 col-lg-6 col-md-12 col-sm-12 font d-flex align-items-center justify-content-center ">
                        <p>{props.weather_desc}</p>
                        
                        
                       
                    </div>
                    </div>
                </div>



                <div className="row justify-content-center ">
                    <div className="col-lg-2  d-flex align-items-center justify-content-center  font ">
                        {/* <h1>{props.weather_icon}</h1> */}
                        <img src={props.weather_icon} className="img-fluid weatherIconImg" alt="" />

                        {/* <ReactAnimatedWeather
                            icon={props.icons}
                            color={props.color}
                            size={props.size}
                            animate={props.animate} /> */}
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="container date-container">
                        <h4 className="date-date">{props.date}</h4>
                        
                    </div>

                    <div className="col-sm pt-5 ">
                        <div className="sunrise-container">
                        <p className="sunrise">{props.sunRise}</p>
                            <h6>Sunrise</h6>
                            <img src={props.iconSunRise} className="img-fluid sunIcon" alt=""/>
                            
                           

                        </div>
                    </div>

                    <div className="col-sm pt-5">
                        <div className="sunset-container">
                            <p className="sunset">{props.sunSet}</p>
                            <h6>Sunset</h6>
                            <img src={props.iconSunSet} className="img-fluid sunIcon" alt=""/>
                           
                           
                        </div>
                    </div>
                </div>
            </div>

               
                </div>
           
            

           

            </div>




        </section>
    )
}

export default DispalyWeather

