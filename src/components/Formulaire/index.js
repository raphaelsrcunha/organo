import './Formulaire.css'
import Textfield from '../Textfield'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Formulaire = (props) => {

    let [name, setName] = useState('')
    let [role, setRole] = useState('')
    let [image, setImage] = useState('')
    let [team, setTeam] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        props.onAddPerson({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')

    }

    return (
        <section className='formulaire'>
            <form onSubmit={onSubmit}>
                <h2>Fill the form to add a new person to your organogram</h2>
                <Textfield 
                    required={true} 
                    label="Name" 
                    placeholder="Type your name here"
                    value = {name}
                    aoAlterado = {value => setName(value)} 
                />
                
                <Textfield 
                    required={true} 
                    label="Role" 
                    placeholder="Type your role here" 
                    value={role}
                    aoAlterado={value => setRole(value)}
                />

                <Textfield 
                    required={true} 
                    label="Image" 
                    placeholder="Type the image address here" 
                    value={image}
                    aoAlterado={value => setImage(value)}    
                />
                
                <Dropdown 
                    required={true} 
                    label="Team" 
                    items={props.teams}
                    value={team}
                    aoAlterado={value => setTeam(value)}
                />
                
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Formulaire