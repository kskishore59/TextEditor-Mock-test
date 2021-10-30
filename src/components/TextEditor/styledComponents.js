import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  background-size: cover;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const SubContainer = styled.div`
  background-color: #1b1c22;
  height: 90%;
  width: 70%;
  display: flex;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-family: Roboto;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  height: 100%;
  margin: 20px;
  width: 50%;
`

export const Image = styled.img`
  margin: 10px;
`

export const EditorContainer = styled.div`
  background-color: #25262c;
  margin: 20px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const IconsContainer = styled.div`
  display: flex;
`
export const ButtonItem = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border: 0px none;
  height: 50px;
  margin: 10px;
  margin-right: 15px;
  cursor: pointer;
`
export const HrLine = styled.hr`
  color: #334155;
  width: 100%;
  background-color: #334155;
  border 2px solid #334155;
  margin: 0px;
`

export const InputField = styled.input`
  height: 100%;
  width: 90%;
  background-color: transparent;
  border: 0px none;
  color: white;
`
