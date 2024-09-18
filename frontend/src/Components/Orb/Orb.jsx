import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';



const Orb= () => {

  const {width, height} = useWindowSize();
  console.log(width,height)

  const moveOrb = keyframes`
    0%{
        transform: translate(0, 0);
    }
    50%{
        transform: translate(${width}px, ${height/2}px);
    }
    100%{
        transform: translate(0, 0);
    }
`;

const OrbStyle = styled.div`
  width: 70vh;
  height: 70vh;
  position: absolute;
  border-radius: 50%;
  margin-left: -37vh;
  margin-top: -37vh;
  background: linear-gradient(180deg,#ca52d7 0%,#3094e0 100%);
  filter: blur(400px);
  animation: ${moveOrb} 15s alternate linear infinite;

`;

  return (
    <OrbStyle>
    </OrbStyle>
  )
}

export default Orb


