/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line 
import styled from "styled-components";
import TheRange from "./Clenght";
import { PasswordGenerator } from "./StyledComponents";

const MainBox = styled.div`
  width: 25rem;
  height: 35rem;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  margin-left: 8%;

  @media (min-width: 320px) and (max-width: 429px) {
    height: 15%;
    margin-top: 14rem;
    width: 93%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-top:22%;

  @media (min-width: 320px) and (max-width: 429px) {
    // Add any necessary styling for smaller screens here
  }
`;

const DownBox = styled.div`
  height: 26rem;
  background-color: #24232c;
  margin-top: 1.5rem;
  width: 23rem;

  @media (min-width: 320px) and (max-width: 429px) {
    width: 95%;
    height: 70vh;
  }
`;

function Home() {
  return (
    <div>
      <Container>
        <PasswordGenerator>Password Generator</PasswordGenerator>
        <MainBox>
         
          <DownBox>
            <TheRange />
          </DownBox>
        </MainBox>
      </Container>
    </div>
  );
}

export default Home;
