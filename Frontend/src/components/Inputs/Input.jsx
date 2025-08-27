import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
const Input = ({value , onChange, label, placeholder, type}) => {
    const [showpassword, setShowPassword] = useState(false);
    const togglepassword = ()=>{
        setShowPassword(!showpassword);
    };
  return <div>
    <label className='text-[13px] text-slate-800'>{label}</label>
      <div className='input-box'>
        <input type={
            type == "password" ? (showpassword ? "text" : "password") : type
           }
        placeholder={placeholder}
        className='w-full bg-transparent outline-none'
        value={value}
        onChange={(e)=> onChange(e)} />
 
        {type === "password" && (
            <>
            {showpassword ? (
                <FaRegEye size={22}
                className="text-primary cursor-pointer"
                onClick={()=>togglepassword()}/>
            ) : (
                <FaRegEyeSlash size={22}
                className="text-slate-400 cursor-pointer"
                onClick={()=> togglepassword()}
                />
            )
        }     
            </>
        )}

      </div>
    </div>
  
}

export default Input
