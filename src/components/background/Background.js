import React from 'react';
import "./Background.css";

import RegisterForm from '../registerForm/RegisterForm';
import TitleForm from '../titleForm/TitleForm';

function Background() {
    return (
        <div className="background">
           <RegisterForm/>
           <TitleForm />
        </div>
    );
}

export default Background;