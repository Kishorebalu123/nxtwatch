import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 10px 10px;
  align-items: center;
  color: ${props => props.mode && ' #ffffff'};
  background-color: ${props => props.mode && '#000000'};
  @media screen and (min-width: 768px) {
    background-color: ${props => props.mode && '#313131'};
  }
`

export const WebsiteLogo = styled.img`
  height: 25px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`

export const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 40vw;

  @media screen and (min-width: 768px) {
    width: 260px;
  }
`

export const NavItem = styled.li`
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const ModeBtn = styled.button`
  font-size: 20px;
  background-color: transparent;
  color: ${props => props.mode && '#ffffff'};
  border: 0;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const Menu = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Profile = styled.img`
  height: 30px;
  width: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  border: 1px solid ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  color: ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  height: 30px;
  width: 80px;
  border-radius: 3px;
  margin-bottom: 15px;

  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const Logout = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.mode && '#ffffff'};
  font-size: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
