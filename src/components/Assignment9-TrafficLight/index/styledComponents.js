import styled from 'styled-components'


export const TrafficLightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  width: 150px;
  padding: 20px 0px;
  height: 350px;
`

export const Light = styled.div`
  height: 100px;
  width:100px;
  background-color: ${(props)=>props.myColor};
  border-radius: 100px;
`