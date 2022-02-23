import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`

export const Container = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export const Title = styled.h1`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`

export const TitleCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  height: 40px;
  width: 40px;
`
export const Content = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`
