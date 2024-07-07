import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line 

export const PasswordGenerator = styled.div`
  color: white;
  margin-top: -5rem;
  margin-bottom: 30px; 
  font-size:20px;
  color:#817D92;

    @media (min-width: 320px) and (max-width: 429px) {
  margin-top: -14rem;
  margin-bottom: 30px; 
  font-size:20px;
  color:#817D92;
`;

export const Pfiedld = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  width: 23rem;
  margin-top: -5rem;
  background-color: #24232c;

 @media (min-width: 320px) and (max-width: 429px) {
  //margin-left:5%;
   margin-right:20%;
   width: 100%;
  
  
       }
`;

export const Pw = styled.div`
  color: white;
  margin-left: 1.5rem;
  font-weight: bold;
  opacity: 5px;
  font-size: 20px;

    @media (min-width: 320px) and (max-width: 429px) {
   font-size: 14px;
    padding:10px;
   margin:0;
  }
`;

export const Pcopied = styled.div`
  display: flex;
  align-items: center;
  width: 22%;
  justify-content: space-between;
  margin-right: 23px;
    @media (min-width: 320px) and (max-width: 429px) {  
   align-items: center;
  width: 28%;
  margin-right: 18px;
  align-items:center;
   
  }
`;

export const Copied = styled.p`
  color: #A4FFAF;
  margin: 0;
 @media (min-width: 320px) and (max-width: 429px) {
  
   font-size:16px;
  }
`;

export const StyleIcon = styled(FontAwesomeIcon)`
  color: #A4FFAF;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const MyLengtht = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-top: 3.5rem;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 429px) {
   width:90%;
   
  }
  
`;

export const Lcg = styled.h2`
  color: white;
  margin: 0;
  font-size: 14px;
  margin-left: 1.5rem;
`;

export const Ln = styled.h2`
  color: #a4ffaf;
  margin: 0;
  margin-right: 1.5rem;
`;

export const RangeContainer = styled.div`
  margin-top: 1rem;
  align-items: center;
  margin-left: 1.5rem;
`;

interface RangeInputProps {
  value: number;
}

export const RangeInput = styled.input<RangeInputProps>`
  width: 92%;
  appearance: none;
  height: 8px;
  background: linear-gradient(to right, #a4ffaf ${(props) => ((props.value - 8) / 12) * 100}%, black ${(props) => ((props.value - 8) / 12) * 100}%);
  outline: none;
  border-radius: 5px;
  position: relative;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
    border: 2px solid transparent;
    transition: background 0.3s, border 0.3s;
    position: relative;
    z-index: 2;

    &:hover {
      background: black;
      border: 2px solid #4caf50;
    }
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background: transparent;
    border-radius: 5px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
    border: 2px solid transparent;
    transition: background 0.3s, border 0.3s;
    position: relative;
    z-index: 2;

    &:hover {
      background: black;
      border: 2px solid #4caf50;
    }
  }

  &::-moz-range-track {
    width: 100%;
    height: 8px;
    background: transparent;
    border-radius: 5px;
  }

  &:hover::-webkit-slider-runnable-track {
    background: transparent;
  }

  &:hover::-moz-range-track {
    background: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Description = styled.h4`
  margin-left: 10px;
  margin: 0;
  font-size: 0.8rem;
  color: white;
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: none;
  border: 2px solid #a4ffaf;
  border-radius: 0px;
  position: relative;
  transition: background-color 0.2s ease;

  &:checked {
    background-color: #a4ffaf;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 6px;
    height: 9px;
    border: solid black;
    border-width: 0 2px 2px 0;
  }
`;

export const Determings = styled.div`
  width: 20rem;
  height: 3.2rem;
  background: #18171F;
  margin-left: 1.7rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 429px) {
   width:90%;
   margin-left:13px;
  //  margin-right:20%;
  // background-color:red;
  }
  
`;

export const StengthConatiner = styled.div`
  display: flex;
  align-items: center;
  color: #817D92;
  margin-left: 1rem;
  font-size: 13px;
`;

export const StreghtCalculator = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  color: white;
  font-size: 16px;
  margin-right: 10px;
      @media (min-width: 320px) and (max-width: 429px) {
  display:flex;
  gap:20px;
  margin-right: 15px;
  }
`;

export const StrenghtD = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  gap: 5px;
  margin-right: 0.5rem;
`;

export const Box1 = styled.div`
  width: 6px;
  height: 22px;
  border: 1px solid white;
    @media (min-width: 320px) and (max-width: 429px) {
  width: 6px;
  height: 20px;
  border: 1px solid white;
  }
`;

export const Box2 = styled.div`
  width: 6px;
  height: 22px;
  border: 1px solid white;
      @media (min-width: 320px) and (max-width: 429px) {
  width: 6px;
  height: 20px;
  border: 1px solid white;
  }
`;

export const Box3 = styled.div`
  width: 6px;
  height: 22px;
  border: 1px solid white;
      @media (min-width: 320px) and (max-width: 429px) {
  width: 6px;
  height: 20px;
  border: 1px solid white;
  }
`;

export const Box4 = styled.div`
  width: 6px;
  height: 22px;
  border: 1px solid white;
      @media (min-width: 320px) and (max-width: 429px) {
  width: 6px;
  height: 20px;
  border: 1px solid white;
  }
`;

export const GenerateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 90;
  @media (min-width: 320px) and (max-width: 429px) {
   width:90%;
   margin-left:5%;
   margin-bottom:8%;
  
`;

export const Button = styled.button`
  width: 20rem;
  height: 3rem;
  background: #a4ffaf;
  border: none;
  color: black;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    background: none;
    border: 1px solid #a4ffaf;
    color: white;
  }

  &:hover span {
    color: #a4ffaf;

    
  }
`;

export const Arrow = styled.span`
  margin-left: 10px;
  font-size: 1.2rem;
  color: black;
`;
