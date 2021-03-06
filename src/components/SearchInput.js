import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchInput = (props) => {
	const { inputValue, handleInputValue, handleSearch, setIsFocus } = props;

	return (
    <Container>
      <InputContainer>
        <BiSearch />
        <Input
          placeholder="질환명을 입력해 주세요."
          onChange={(e) => handleInputValue(e)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={inputValue}
        />
      </InputContainer>
      <ButtonContainer onClick={handleSearch}>
        <Button>검색</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 41.25rem;
  height: 4.05rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 42px;
  background-color: #fff;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const InputContainer = styled.div`
  width: 85%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  border-top-left-radius: 42px;
  border-bottom-left-radius: 42px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 64px;
    width: 100%;
    border-radius: 0;
  }

  svg {
    margin-right: 10px;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      position: fixed;
      top: 19px;
      left: 8px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  overflow: visible;
  font-size: 1.125rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
  }
`;

const ButtonContainer = styled.div`
  width: 15%;
  height: 4.05rem;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: #007be9;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  border: none;
  cursor: pointer;
`;
