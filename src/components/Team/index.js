import Person from '../Person'
import './Team.css'

const Team = (props) => {
    return (
        props.people.length > 0 && <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='person'>
                {props.people.map(person => <Person key={person.name} name={person.name} role={person.role} image={person.image} backgroundColor={props.primaryColor} />)}
            </div>
        </section>
    )
}

export default Team