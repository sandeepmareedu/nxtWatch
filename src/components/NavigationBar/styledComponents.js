import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
`

export const NavigationLgContainer = styled.div`
  background-color: ${props => props.bgColor};
`

export const NavOptions = styled.div`
  display: flex;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.bgColor};
`

export const NavText = styled.p`
  color: ${props => props.color};
`

export const ContactInfo = styled.div`
  padding: 20px;
`

export const ContactHeading = styled.h3`
  color: ${props => props.color};
`

export const ContactIcons = styled.div`
  display: flex;
`

export const ContactImage = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const ContactNote = styled.p`
  color: ${props => props.color};
`

export const NavigationSmallContainer = styled.div`
  display: flex;
`
