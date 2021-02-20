import React, { useState } from 'react';
import "./FormField.css";

function FormField() {
    let conter = 0;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [password, setPassword] = useState('');

    function revelLabel(e, labelId) {
        if (conter == 0) {
            e.parentNode.style.marginTop = "0";
            e.removeAttribute("placeholder");
            let element = document.getElementById(labelId);
            element.classList.add("active-label");
            conter++;
        }
    }

    function hideLabel(e, labelId, placeholder) {
        if (conter > 0) {
            e.parentNode.style.marginTop = "20px";
            e.setAttribute("placeholder", placeholder);
            let element = document.getElementById(labelId);
            element.classList.remove("active-label");
            conter = 0;
        }
    }

    function checkForm() {
        let element = document.getElementById("btn-nxt");
        if (!(name == "" || password == "" || type == "" || email == "")) {
            if (validateEmail(email)) {
                element.classList.add("active-btn");
                element.removeAttribute("disabled");
            } else {
                let error = document.getElementById("emailError");
                error.style.display = "block"
                if (element && element.classList) {
                    element.classList.remove("active-btn");
                    element.disabled = true;
                }
            }
        }else{
            if (element && element.classList) {
                element.classList.remove("active-btn");
                element.disabled = true;
            }
        }

    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function revelPassword(e){
        e.preventDefault();
        var element = document.getElementById("password");
        if (element.type === "password") {
            element.type = "text";
        } else {
            element.type = "password";
        }
    }

    return (
        <div className="form-field">
            <h2 className="form-title">Let's set up your account</h2>
            <p>Already have an account? <a href="#">Sing in</a></p>

            <form onSubmit={e => e.preventDefault()}>
                <div className="form-g">
                    <label className="label-input" id="nameLabel">Your Name</label>
                    <input
                        type="text"
                        className="input-controll"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        onFocus={e => revelLabel(e.target, "nameLabel")}
                        onBlur={e => hideLabel(e.target, "nameLabel", "Your Name")}
                        value={name}
                        onInput={e => setName(e.target.value)}
                        onChange={checkForm()}
                    />
                </div>
                <div className="form-g">
                    <label className="label-input" id="emailLabel">Email Adress</label>
                    <input
                        type="text"
                        className="input-controll"
                        name="email"
                        id="email"
                        placeholder="Email Adress"
                        onFocus={e => revelLabel(e.target, "emailLabel")}
                        onBlur={e => hideLabel(e.target, "emailLabel", "Email Adress")}
                        value={email}
                        onInput={e => setEmail(e.target.value)}
                        onChange={checkForm()}
                    />
                    <p className="emailError" id="emailError">Please enter a valid email adress</p>
                </div>
                <div className="form-g">
                    <select
                        type="text"
                        className="input-controll"
                        name="user"
                        id="user"
                        value={type}
                        onInput={e => setType(e.target.value)}
                        onChange={checkForm()}
                    >
                        <option>I would describe my user type as</option>
                        <option value="Developer">Developer</option>
                    </select>
                </div>
                <div className="form-g">
                    <label className="label-input" id="passwordLabel">Password</label>
                    <input
                        type="password"
                        className="input-controll"
                        name="email"
                        id="password"
                        placeholder="Password"
                        onFocus={e => revelLabel(e.target, "passwordLabel")}
                        onBlur={e => hideLabel(e.target, "passwordLabel", "Password")}
                        value={password}
                        onInput={e => setPassword(e.target.value)}
                        onChange={checkForm()}
                    />
                    <a href="#" className="show-password" onClick={e => revelPassword(e)}><i className="fas fa-eye"></i></a>
                    <p>Minimum 9 characters</p>
                </div>
                <button className="btn-nxt" id="btn-nxt" disabled>Next</button>
            </form>
            <p>By clickink the "Next" button, you agree to creating a free account, and to <a href="#">Terms of Service</a> and <a href="#">Privacey Policy</a>.</p>
        </div>
    );
}

export default FormField;