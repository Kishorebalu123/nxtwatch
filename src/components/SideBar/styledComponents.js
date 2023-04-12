import styled from 'styled-components'

export const SideBarBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-width: 150px;
  background-color: ${props => props.mode && ' #313131'};
`

export const Categories = styled.ul`
  list-style-type: none;
  margin-top: 0;
  width: 100%;
`

export const EachCategory = styled.li`
  background-color: ${props =>
    props.mode ? props.active && '#606060' : props.active && ' #f1f5f9'};
  gap: 10px;
  padding-left: 10px;
  color: ${props => (props.active ? 'red' : '#909090')};
  @media screen and (min-width: 768px) {
    min-width: 220px;
  }
`
export const EachItem = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled.p`
  color: ${props => (props.active ? 'red' : '#909090')};
`
export const Name = styled.p`
  color: ${props => (props.mode ? ' #ffffff' : ' #606060')};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;

  gap: 10px;

  color: ${props => props.active && 'red'};
  border: 0;
`
export const BottomCard = styled.div`
  background-color: ${props => props.mode && ' #313131'};
  padding-left: 10px;
  padding-right: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Contact = styled.p`
  font-weight: 500;
  color: ${props => props.mode && '#ffffff'};
`

export const SocialCard = styled.div`
  display: flex;
  width: 100%;
`

export const SocialImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const EndDescription = styled.p`
  font-weight: 500;

  color: ${props => props.mode && '#ffffff'};
`
