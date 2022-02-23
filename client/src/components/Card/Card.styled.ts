import styled from 'styled-components'

export const Wrapper = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 15px;
  border-radius: 4px;
`

type ContentProps = {
  status: boolean
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  width: 600px;
  text-decoration: ${({ status }) => status && 'line-through'};

  p {
    margin: 0;
    padding: 0;
    text-align: justify;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const CreateInformation = styled.div`
  display: flex;
  font-size: 10px;
  color: grey;
  justify-content: flex-end;
  margin-bottom: 10px;
 
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`
