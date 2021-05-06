import axios from 'axios';
var c = 0;


export const search =  ({location}) => {
    return  (dispatch, getState) => {
        // async calls
     //   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/cairo.json?access_token=pk.eyJ1IjoiYWhtZWRub2ZhbCIsImEiOiJjandxbHlhcHQxazZ1NDNrZTVieXZpOTc5In0.FIoVxtxXXLv8dRy8lCrpow&limit=1';
        
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=bf9a636ba2132fa027f74ec99f926c3d&units=metric';
     axios.get(url).then((res) => {

        console.log(res);
        dispatch({
            type: 'SEARCH',
            forecast: {
                name: res.data.name,
                description: res.data.weather[0].description,
                current: res.data.main.temp,
                max: res.data.main.temp_max,
                min: res.data.main.temp_min

            }
        });

        
        if (c == 0) {
        document.getElementById("box").classList.toggle("move-up");
        document.getElementById("fc").classList.toggle("fade");
        document.getElementById("resbx").classList.toggle("fade2");
        document.getElementById("fc2").classList.toggle("fade");
        c++;
        }

        }).catch(() => dispatch({
            type: 'ERROR'
        }))


    }
}