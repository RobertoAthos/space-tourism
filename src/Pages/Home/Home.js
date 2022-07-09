import React from 'react'
import Header from '../../Components/Header/Header'
import { BodyContainer, SectionContainer } from './styles'

function Home() {
  return (
    <BodyContainer>
        <Header/>
        <SectionContainer>
            <div className='text'>
                <h3>SO, YOU WANT TO TRAVEL TO</h3>
                <h2>SPACE</h2>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='explore'>
                <h2>EXPLORE</h2>
            </div>
        </SectionContainer>
    </BodyContainer>
  )
}

export default Home