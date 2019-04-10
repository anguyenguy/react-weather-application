import React from 'react';
import Navigation from './Navigation/Navigation';
import './Layout.css';
import Form from './Form/Form';
import ShowResult from './ShowResult/ShowResult';

const layout = (props) => {
    return(
        <div className="Layout">
            <div className="Top">
                <Navigation />
            </div>
                
            <div className="mt-5 d-flex justify-content-center SecondContent">
                 <Form weather={props.getWeather}/>
                 <ShowResult nextState= {props.state}/>
            </div>
        </div>   
    );

}

export default layout;