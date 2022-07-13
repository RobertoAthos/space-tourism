import React,{useState} from 'react'
import Header from '../../Components/Header/Header'
import { Container, CrewBody } from './styles'
import Title from '../../Components/SectionTitle/Title'
import data from '../../data'



function Crew() {
  const[people] = useState(data.crew)
  const[value,setValue]=useState(0)
  
  const {name,role,bio,images} = people[value]
  return (
    <CrewBody>
        <Header/>
        
    <Container>
    <div className='crew-container'>
    <div className='title'><Title number='02' title='MEET YOUR CREW'/> </div>
        <h3>{role}</h3>
        <h1>{name}</h1>
        <p>{bio}</p>
      <div className='btn-crew'>
          {people.map((items,index)=>(
                  <button key={index} onClick={()=>setValue(index)}>{items.name}</button>
                ))}
      </div>
      </div>

      <div className='crew-imgs'>
        <img src={images.png} alt={name}/>
      </div>
      
    </Container>

    </CrewBody>
  )
}

export default Crew