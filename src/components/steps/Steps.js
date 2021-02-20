import React from 'react';
import "./Steps.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Steps() {
    return (
        <div className="steps">
            <p>
                Step 1 of 3
                      <span className="icon active"><i className="fas fa-circle"></i></span>
                <span className="icon"><i className="fas fa-circle"></i></span>
                <span className="icon"><i className="fas fa-circle"></i></span>
            </p>
        </div>
    );
}

export default Steps;