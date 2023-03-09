import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.mode ? '#383838' : '#ffffff')};
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`

export const NxtWatchContainer = styled.div`
  background-color: ${props => (props.mode ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 90vw;
  @media screen and (min-width: 768px) {
    align-items: center;
    width: 500px;
  }
`

export const LoginLogo = styled.img`
  width: 150px;
  margin-top: 20px;
  margin-bottom: 40px;
`

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Password = styled(Username)`
  margin-bottom: 10px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const ShowPasswordContainer = styled.div`
  margin-bottom: 30px;
`

export const Input = styled.input`
  background-color: ${props => (props.mode ? '#000000' : '#ffffff')};
  height: 40px;
  border: 1px solid ${props => (props.mode ? '#475569' : '#cccccc')};
  border-radius: 3px;
  padding-left: 15px;
  color: ${props => (props.mode ? '#ffffff' : '#64748b')};
`

export const Label = styled.label`
  font-family: Roboto;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${props => (props.mode ? '#ffffff' : '#64748b')};
`
export const CheckBox = styled.input``

export const ShowPassword = styled.label`
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
`

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border: 0;
  color: #ffffff;
  height: 38px;
  border-radius: 5px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  margin-bottom: 20px;
`
