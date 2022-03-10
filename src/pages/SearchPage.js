import React, { useState, useRef, useEffect } from 'react';
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
	const [selected, setSelected] = useState();
	const [listIndex, setListIndex] = useState(-1);

	const handleKeyPress = (e) => {
		if(e.keyCode === 40 && listIndex < 6){
			setListIndex(listIndex+1);
		} else if(e.keyCode === 38){
			if(listIndex !== 0){
				setListIndex(listIndex-1);
			}
		}
	}

	useEffect(() => {
		if(dataList && listIndex !== -1){
			setSelected(dataList[listIndex].id);
		}
	}, [listIndex])

	//포커싱 아웃 되었을때 인덱스 초기화
	useEffect(() => {
		if(!isFocus) {
			setListIndex(-1);
			setSelected();
		}
	}, [isFocus])

	const qeuryCall = (value) => {
		//여기서 api하면 될듯
		axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/search-conditions/?name=${value}`)
		.then((result) => {
			setDataList(result.data)
		})
	}

	const delayCall = useRef(_.debounce((q) => qeuryCall(q), 1000)).current;

	const handleInputValue = (e) => {
		setInputValue(e.target.value)
		delayCall(e.target.value);
	}

	const handleSearch = () => {
		setInputValue('')
	}


	return (
		<Container onKeyDown={(e) => handleKeyPress(e)}>
			<InputContainer>
				<Title/>
				<SearchInput
					setIsFocus={setIsFocus}
					inputValue={inputValue} 
					handleInputValue={handleInputValue} 
					handleSearch={handleSearch}/>
			</InputContainer>
			<SearchList 
				dataList={dataList} 
				isFocus={isFocus} 
				selected={selected} 
				inputLength={inputValue.length}
			/>
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