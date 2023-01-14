import React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";



function Login() {
    return (
        <div id="ventanalogin">
            <div id="login">
                <div id="loginform">
                    <div id="loginformtitle">
                        <h1>Inicio de sesión</h1>
                        <Field  name="email" component={TextField} type="text" label="Email" />
                        <Field  name="password" component={TextField} type="password" label="Contraseña" />
                        </div>  

                    <div id="loginformbuttons">
                        <button id="loginformbutton1" type="submit">Iniciar sesión</button>
                        <button id="loginformbutton2" type="submit">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>

    )
}
