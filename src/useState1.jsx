import { useState } from "react"

export default function Estudo1(){

    const [texto,setTexto] = useState('')
    
    return(
        <>
        <p>O texto é: {texto}</p>
        <input type="text" value={texto} onChange={(e)=>{setTexto(e.target.value)}}/>
        </>

    )
}