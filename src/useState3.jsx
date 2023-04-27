import { useState } from "react"

export default function Matriz(){

    const [list,setList] = useState(['banana','manga'])

    return(
        <>
        {list.map(
            (ittem)=>{

                return(
                          <header>
                           
                           <p></p>
                           <button onClick={()=>{setList(list.filter((p)=>p !== ittem))}}>Remover</button>
                          </header>

                )
            }
        )}
        <button onClick={()=> setList([...list,'fruta'])}>Adicionar fruta</button>
        </>
    )
}