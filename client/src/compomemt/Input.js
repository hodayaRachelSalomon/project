import React, { useState } from "react";
import { InputText } from "primereact/inputtext";



const Login = () => {
    
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText   placeholder="Email" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}


//$inputBg: #ffffff;
export default Login;