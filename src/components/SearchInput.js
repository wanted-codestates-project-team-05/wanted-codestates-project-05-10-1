import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchInput = (props) => {

	const {inputValue, handleInputValue, handleSearch} = props;


	return (
		<Container>
			<InputContainer>
				<BiSearch/>
				<Input placeholder='질환명을 입력해 주세요.' onChange={(e) => handleInputValue(e)} value={inputValue}/>
			</InputContainer>
			<ButtonContainer onClick={handleSearch}>
				<Button>검색</Button>
			</ButtonContainer>
		</Container>
	)
}

const Container = styled.div`
	width: 41.25rem;
	height: 4.05rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 42px;
	background-color: #fff;
`

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
	
	svg {
		margin-right: 10px;
		font-size: 1.5rem;
	} 
`

const Input = styled.input`
	width: 100%;
	height: 2rem;
	border: none;
	overflow: visible;
	font-size: 1.125rem;

	&:focus {
		outline: none;
	}
`

const ButtonContainer = styled.div`
	width: 15%;
	height: 4.05rem;
`

const Button = styled.button`
	width: 100%;
	height: 100%;
	background-color: #007BE9;
	color: #FFFFFF;
	font-size: 1.125rem;
	font-weight: 700;
	letter-spacing: -0.018em;
	line-height: 1.6;
	border-top-right-radius: 42px;
	border-bottom-right-radius: 42px;
	border: none;
	cursor: pointer;
`