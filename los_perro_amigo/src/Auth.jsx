import React from "react";
import 'firebase/auth';
import { useFirebaseApp } from "reactfire";
import RegisterForm from "./componentes/RegisterForm";

export default {props} => {
    return (
    <div>
        <div>
            <RegisterForm />
        </div>
    </div>
    )
}