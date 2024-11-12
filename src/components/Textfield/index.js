import { useState } from "react"
import "./Textfield.css"

const Textfield = (props) => {

    const onType = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="textfield">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.required} placeholder={props.placeholder} />
        </div>
    )    
}

export default Textfield