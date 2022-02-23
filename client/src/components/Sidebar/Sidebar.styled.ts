import styled from 'styled-components'

export const Wrapper = styled.nav`
  height: 100vh;
  width: 200px;
  fontsize: 24px;
  font-weight: bold;
  background-color: #304d63;
  padding-top: 50px;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 25px;
  cursor: pointer;

  span {
    color: white;
    margin-top: 10px;
  }
`
