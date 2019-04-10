import React from 'react';
import './Navigation.css';

const navigation = () =>{
    return (
        <div className="mt-3 d-flex justify-content-center">
            <div className="Navigation">
                <h1 className="text-primary">Weather Finder</h1>
                <h3 className='text-muted'>Find out temperature, conditions and more...</h3>
            </div>
        </div>

    );

}

export default navigation;