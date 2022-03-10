import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import _ from 'lodash';
import { SearchInput } from '../components/SearchInput';
import { SearchList } from '../components/SearchList';
import { Title } from '../components/Title';

function SearchPage() {

	const [inputValue, setInputValue] = useState('');
	const [dataList, setDataList] = useState();
	const [isFocus, setIsFocus] = useState(false);

	const qeuryCall = (value) => {
		//여기서 api하면 될듯
		axios.get(`https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${value}`)
		.then((result) => {
			setDataList(result.data)
		})
	}

	const delayCall = useRef(_.debounce((q) => qeuryCall(q), 1000)).current;

	const handleInputValue = (e) => {
		setInputValue(e.target.value)
		delayCall(e.target.value);
		// setTimeout(() => {
		// 	if(ref.current.value === e.target.value){
		// 		console.log('같데')
		// 		setIsTyping(false);
		// 	} else {
		// 		clearTimeout(this.setTimeout)
		// 	}
		// }, 2000)
	}

	const handleSearch = () => {
		setInputValue('')
	}


	return (
		<Container>
			<InputContainer>
				<Title/>
				<SearchInput
					setIsFocus={setIsFocus}
					inputValue={inputValue} 
					handleInputValue={handleInputValue} 
					handleSearch={handleSearch}/>
			</InputContainer>
			{inputValue.length > 0 ? <SearchList dataList={dataList} isFocus={isFocus}/> : ''}
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