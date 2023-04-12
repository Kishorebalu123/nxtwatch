import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupCard = styled.div`
  height: 180px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Paragraph = styled.p``

export const Buttons = styled.div``

export const CancelBtn = styled.button``

export const ConfirmBtn = styled.button``

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
