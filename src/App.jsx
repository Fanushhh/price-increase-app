import { GlobalStyle } from "./assets/GlobalStyle";
import styled from "styled-components";
import Hero from "./components/Hero";
import Form from './components/Form';

const Main = styled.main`
  background-color: white;;
  padding:16px;

`



export default function App() {

  return (
    <Main>
      <GlobalStyle />
      <Hero />
      <Form />
      
    </Main>
  )
}


