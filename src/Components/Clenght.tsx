import React, { useState, useCallback } from "react";
import { Pfiedld, Pw, Pcopied, Copied, StyleIcon } from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import {
  MyLengtht,Lcg,Ln,RangeContainer,RangeInput,Container,CheckBoxContainer,Description,
  StyledCheckbox,
  Determings,
  StengthConatiner,
  StreghtCalculator,
  StrenghtD,
  Box1,
  Box2,
  Box3,
  Box4,
  GenerateButtonContainer,
  Button,
  Arrow,
  PasswordGenerator
} from "./StyledComponents";

const lowercaseList = "abcdefghijkmnopqrstuvwxyz";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberList = "1234567890";
const symbolsList = "!£$%^&*#@:{~?><()";

function TheRange() {
  const [password, setPassword] = useState("");
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState<number>(0);

  const calculateStrength = (password: string) => {
    let strengthScore = 0;
    if (password.length >= 8) strengthScore++;
    if (password.length >= 12) strengthScore++;
    if (/[A-Z]/.test(password)) strengthScore++;
    if (/[a-z]/.test(password)) strengthScore++;
    if (/[0-9]/.test(password)) strengthScore++;
    if (/[\W_]/.test(password)) strengthScore++;
    return strengthScore;
  };

  const generatePassword = useCallback(() => {
    let characterList = "";

    if (uppercase) characterList += uppercaseList;
    if (lowercase) characterList += lowercaseList;
    if (numbers) characterList += numberList;
    if (symbols) characterList += symbolsList;

    let tempPassword = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      tempPassword += characterList.charAt(characterIndex);
    }

    setPassword(tempPassword);
    setCopied(false);

    const newStrength = calculateStrength(tempPassword);
    setStrength(newStrength);
  }, [uppercase, lowercase, numbers, symbols, passwordLength]);

  const copyPassword = useCallback(() => {
    if (password.length) {
      navigator.clipboard.writeText(password);
      setCopied(true);
    }
  }, [password]);

  const getBoxColor = (index: number) => {
    const weakColor = "#ff4b4b"; // Red
    const mediumColor = "#ff823e"; // Orange
    const strongColor = "#a4ffaf"; // Green

    if (strength >= 4) {
      return strongColor;
    } else if (strength >= 3) {
      return index <= 3 ? mediumColor : "#e0e0e0";
    } else if (strength >= 2) {
      return index <= 2 ? mediumColor : "#e0e0e0";
    } else if (strength >= 1) {
      return index === 1 ? weakColor : "#e0e0e0";
    } else {
      return "#e0e0e0";
    }
  };

  const getStrengthDescription = () => {
    if (strength >= 4) {
      return "Strong";
    } else if (strength >= 2) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

  return (
   <div>
    
     <div>
      
      <Pfiedld>
      
        <Pw style={{ opacity: password ? 1 : 0.5 }}>
          {password || "GHYWT!!£$%^G"}
        </Pw>
        <Pcopied>
          <Copied>{copied ? "Copied" : ""}</Copied>
          <StyleIcon
            icon={faCopy}
            onClick={copyPassword}
            style={{ color: copied ? "#A4FFAF" : "white" }}
          />
        </Pcopied>
      </Pfiedld>

      <MyLengtht>
        <Lcg>Character length</Lcg>
        <Ln>{passwordLength}</Ln>
      </MyLengtht>
      <RangeContainer>
  <RangeInput
    type="range"
    min="8"
    max="20"
    className="range"
    value={passwordLength}
    onChange={(event) => setPasswordLength(Number(event.target.value))}
  />
</RangeContainer>


      <Container>
        <CheckBoxContainer>
          <StyledCheckbox
            id="includeUppercase"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          <Description>Include Uppercase Letters</Description>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <StyledCheckbox
            id="includeLowercase"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          <Description>Include Lowercase Letters</Description>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <StyledCheckbox
            id="includeNumbers"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          <Description>Include Numbers</Description>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <StyledCheckbox
            id="includeSymbols"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          <Description>Include Symbols</Description>
        </CheckBoxContainer>
      </Container>

      <Determings>
        <StengthConatiner>STRENGTH</StengthConatiner>
        <StreghtCalculator>
          <span>{getStrengthDescription()}</span>
          <StrenghtD>
            <Box1 style={{ backgroundColor: getBoxColor(1)}} />
            <Box2 style={{ backgroundColor: getBoxColor(2)}} />
            <Box3 style={{ backgroundColor: getBoxColor(3)}} />
            <Box4 style={{ backgroundColor: getBoxColor(4)}} />
          </StrenghtD>
        </StreghtCalculator>
      </Determings>

      <GenerateButtonContainer>
        <Button onClick={generatePassword}>
          Generate
          <Arrow>&rarr;</Arrow>
        </Button>
      </GenerateButtonContainer>
    </div>
   </div>
  );
}

export default TheRange;
