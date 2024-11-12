import { useState } from 'react';
import Banner from './components/Banner';
import Formulaire from './components/Formulaire';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Backend',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Frontend',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UI/UX',
      primaryColor: '#DB63BF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Innovation and Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const [people, setPeople] = useState([])

  const onNewPersonAdded = (person) => {
    setPeople([...people, person])
    console.log(people)
  }

  return (
    <div className="App">
      <Banner />
     
      <Formulaire teams={teams.map(team => team.name)} onAddPerson={person => onNewPersonAdded(person)} />
     
      {teams.map(team => <Team
        name={team.name} 
        key={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        people={people.filter(person => person.team === team.name)}  
      />)}
      <Footer />
    </div>
  );
}

export default App;
