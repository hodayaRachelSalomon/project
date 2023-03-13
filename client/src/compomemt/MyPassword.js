
import React, { useState } from "react";
import { Password } from 'primereact/password';

 const MyPassword= () =>{
    
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password placeholder="Password" value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        </div>
    )
}
        
export default MyPassword