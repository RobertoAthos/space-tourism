import React,{useState} from 'react'
import {BodyContainer, Container} from './styles'
import Header from '../../Components/Header/Header'
import data from '../../data'
import Title from '../../Components/SectionTitle/Title'


function Destination() {
  
  const[planets] = useState(data.destinations)
  const[value,setValue]=useState(0)
  
  const {name,images,description,distance,travel} = planets[value]

  return (
    <BodyContainer>
        <Header/>
        <Container>
          <div className='planet-img'>
            <Title number="01" title="PICK YOUR DESTINATION"/>
            <article>
            <img src={images.png} alt={name} width={"350px"}/>
            </article>
          </div>
          <div className='planet-items'>
           
            {planets.map((items,index)=>(
              <button key={index} onClick={()=>setValue(index)}>{items.name}</button>
            ))}

            <div className='main-text'>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <div className='infos'>
              <div className='infos-text'>
                 <ul>
                  <label>AVB.DISTANCE</label>
                    <li>{distance}</li>
                    <label>EST.TRAVEL TIME</label>
                    <li>{travel}</li>
                 </ul>
              </div>
            </div>
          </div>
          
        </Container>
    </BodyContainer>
  )
}

export default Destination