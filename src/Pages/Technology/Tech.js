import React,{useState} from 'react'
import Header from '../../Components/Header/Header'
import { Container, TechBodyContainer } from './styles'
import data from '../../data'
import Title from '../../Components/SectionTitle/Title'

function Tech() {

    const [rockets] = useState(data.technology)
    const [value, setValue] = useState(0)

    const {number, name, images,description} = rockets[value]

  return (
    <TechBodyContainer>
        <Header/>
        <div className='title'>  <Title number="03" title="SPACE LAUNCH 101"/></div>
        <Container>
            <div className='tech-text'>
              <div className='btn-numbers'>
              {rockets.map((items,index)=>(
                <button key={index} onClick={()=>setValue(index)}>{items.number}</button>
            ))}
              </div>
              <div className='main-text'>
                   <span>THE TERMINOLOGY...</span>
                    <h1>{name}</h1>
                    <p>{description}</p>
              </div>
            </div>
            <div className='tech-img'>
                <img src={images.portrait} alt={name}/>
            </div>
        </Container>
    </TechBodyContainer>
  )
}

export default Tech