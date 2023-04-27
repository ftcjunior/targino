import { useState } from "react"

export default function Numero(){

    const [numero1,setNumero1] = useState(0)

    
    return(

        <>
        <button onClick={()=>{setNumero1(numero1 + 4)}}>Aumentar</button>

        <p>{numero1}</p>
        </>
    )
}