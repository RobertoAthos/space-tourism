import React, {useState} from 'react'
import {BodyContainer, Container} from './styles'
import Header from '../../Components/Header/Header'
import * as destinations from '../../data.json'

function Destination() {

  const [planets] = useState(destinations)
  const [value,setValue] =useState(0)

  const {name, images, description, distance, travel} = planets[value]

  return (
    <BodyContainer>
      <Header/>
      <Container>
        <div className='planet'>
          <h2><span>01</span> PICK YOUR DESTINATION</h2>
          <img src={images.png} alt={name} title={name} width={"350px"}/>
        </div>
        <div className='planet-text'>

            {planets.map((items, index)=>(
              <button key={index} onClick={()=>setValue(index)}>
                {items.name}
              </button>
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