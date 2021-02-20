import React from 'react';
import "./RegisterForm.css";

import Steps from '../steps/Steps';
import FormField from '../formField/FormField';

function RegisterForm() {
    return (
            <div className="register-form">
                <Steps/>
                <FormField/>
                
            </div>
    );
}

export default RegisterForm;