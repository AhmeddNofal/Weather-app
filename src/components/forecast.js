import React from 'react';
import {connect} from 'react-redux';

const Forecast = ({forecast}) => {
    return(
        <div id="fc" className="forecast">
            <p>{forecast.name}</p>
            <div id="fc2" className="temp">
                <p className="tmp-val"><span className="underline">min</span>: {forecast.min} &#8451;</p>
                <p className="tmp-val"><span className="underline">current</span>: {forecast.current} &#8451;</p>
                <p id="last" className="tmp-val"><span className="underline">max</span>: {forecast.max} &#8451;</p>
            </div>
             <p>{forecast.description}....</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        forecast: state.forecast
    }
}

export default connect(mapStateToProps)(Forecast);