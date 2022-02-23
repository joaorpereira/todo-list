import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
  font-size: 14px;

  label {
    font-weight: bold;
    margin-top: 10px;
  }
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
`
export const Title = styled.h1`
  margin-bottom: 20px;
  text-transform: uppercase;
`

export const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
  text-align: start;
`
