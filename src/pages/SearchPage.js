import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchInput } from '../components/SearchInput';
import { SearchList } from '../components/SearchList';
import { Title } from '../components/Title';

function SearchPage() {

	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (e) => {
		setInputValue(e.target.value)
	}

	const handleSearch = () => {
		setInputValue('')
	}

	return (
		<Container>
			<InputContainer>
				<Title/>
				<SearchInput 
					inputValue={inputValue} 
					handleInputValue={handleInputValue} 
					handleSearch={handleSearch}/>
			</InputContainer>
			{inputValue.length > 0 ? <SearchList/> : ''}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #CAE9FF;
`

const InputContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 150px;
`

export default SearchPage;