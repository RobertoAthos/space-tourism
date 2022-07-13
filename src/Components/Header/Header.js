import React from 'react'
import { HeaderContainer, Links } from './styles'
import logo from '../../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
   <HeaderContainer>
        <div className='logo'><img src={logo} alt='logo'/></div>
        <div className='line'></div>
        <Links>
        
            <nav >
                <ul>
                    <NavLink to='/' activeClassName="active"> <li><p>HOME</p></li></NavLink>
                    <NavLink to='/Destination' activeClassName="active"> <li><p>DESTINATION</p></li></NavLink>
                    <NavLink to='/Crew' activeClassName="active">  <li><p>CREW</p></li></NavLink>
                    <NavLink to='/Technology' activeClassName="active"><li><p>TECHNOLOGY</p></li></NavLink>
                </ul>
            </nav>
        </Links>
   </HeaderContainer>
  )
}

export default Header