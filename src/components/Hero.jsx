import styled from "styled-components"

const Title = styled.h1`
  font-size: 2.5rem;
  color:black;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 2rem;

`

const Description = styled.p`
  font-size: 1rem;
  text-align: center;

`

export default function Hero(){
    return(
        <>
            <Title>Something new</Title>
            <Description>This is a simple app created to help Br get her calculations done for work.</Description>
            <Description>You just need to input the old price along with the new price and in the result panel you will see the procentage.</Description>
        </>
    )


}