import React, { useState } from "react";
import Login from './login/Login';
import Register from './register/Register';

const App = () => {

    const [currentform, setCurrentfrom] = useState('Login');
    const toggleForm = (formName) => {
        setCurrentfrom(formName);
    }
    return (
        <div className="App">
            {
                currentform === "login"
                    ? <Login onFormSwitch={toggleForm} />
                    : <Register onFormSwitch={toggleForm} />

            }
        </div>

    );
}
export default App;