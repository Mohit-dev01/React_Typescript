import React, { useState } from "react";

interface MyButtonProps{
    text: string
    onClick?: () => void
}
interface Book{
    name : string 
    price : number
}
const Mybutton: React.FC<MyButtonProps> = (props) => {
    const [value, setValue] = useState<string| undefined>()
    const {text} = props
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
       setValue( e.target.value)
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(e);
        
    }
    return <>
    {/* <h1>{text}</h1>
    <h3>name : {value.name} and price : {value.price}</h3>
    <button onClick={() => {setValue({name: "two", price : 29})}}>{text}</button> */}
<div>{value}</div>
    <form action="" onSubmit={handleSubmit}>
    <input type="text" onChange={handleChangeName} placeholder="ytow somwtubg" />
    <button type="submit">Submit</button>
    </form>
    </>
}

export default Mybutton
