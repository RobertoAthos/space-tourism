import React from 'react'
import { HeaderContainer, Links } from './styles'
import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <HeaderContainer>
        <div className='logo'><img src={logo} alt='logo'/></div>
        <div className='line'></div>
        <Links>
            <nav>
                <ul>
                    <Link to='/'> <li id='active'><p>00 HOME</p></li></Link>
                    <Link to='/Destination'> <li><p>01 DESTINATION</p></li></Link>
                    <Link to='/Crew'>  <li><p>02 CREW</p></li></Link>
                    <Link to='/Technology'><li><p>03 TECHNOLOGY</p></li></Link>
                </ul>
            </nav>
        </Links>
   </HeaderContainer>
  )
}

export default Header