import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 10px 10px;
  align-items: center;
  color: ${props => props.mode && ' #ffffff'};
  background-color: ${props => props.mode && '#000000'};
`

export const WebsiteLogo = styled.img`
  height: 25px;
`

export const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 40vw;
`

export const NavItem = styled.li``
