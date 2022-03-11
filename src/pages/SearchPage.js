import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGetSearchWordQuery } from '../services/searchWord';
import { useDispatch } from 'react-redux';
import { dataListUpdate } from '../services/dataListSlice';
import useDebounce from '../util/useDebounce';

import { SearchInput } from '../components/SearchInput';
import { SearchList } from '../components/SearchList';
import { Title } from '../components/Title';

function SearchPage() {

	const [inputValue, setInputValue] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const debounceInputValue = useDebounce(inputValue, 700);
	const [dataList, setDataList] = useState();
	const [isFocus, setIsFocus] = useState(false);
	const [selected, setSelected] = useState();
	const [listIndex, setListIndex] = useState(-1);
	const dispatch = useDispatch();
	const { data } = useGetSearchWordQuery(debounceInputValue, 
		{ skip: debounceInputValue === '' ? true : false }
	);

	const handleKeyPress = (e) => {
		if(e.keyCode === 40 && listIndex < 6){
      setListIndex(listIndex + 1);
		} else if(e.keyCode === 38){
      if(listIndex !== 0){
				setListIndex(listIndex-1);
			}
		}
	}

	const handleInitSelelcted = () => {
		setListIndex(-1);
		setSelected();
	}

	useEffect(() => {
		if(dataList && listIndex !== -1){
      setSelected(dataList[listIndex].id);
		}
	}, [listIndex])

	//포커싱 아웃 되었을때 인덱스 초기화
	useEffect(() => {
		if(!isFocus) {
			handleInitSelelcted();
		}
	}, [isFocus])

	useEffect(() => {
		setDataList(data)
    dispatch(dataListUpdate(data))
	}, [data])

	useEffect(() => {
		handleInitSelelcted();
		setIsSearching(false)
	}, [debounceInputValue])

	const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }
	const handleSearch = () => {
    setInputValue('')
		setIsSearching(true)
	}

	return (
    <Container onKeyDown={(e) => handleKeyPress(e)}>
      <InputContainer>
        <Title />
        <SearchInput
          setIsFocus={setIsFocus}
          inputValue={inputValue}
          handleInputValue={handleInputValue}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
        />
      </InputContainer>
			<SearchList
				isSearching={isSearching}
				isFocus={isFocus} 
				selected={selected} 
				inputLength={inputValue.length}
			/>
    </Container>
  );
}


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #CAE9FF;
	`;

const InputContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 150px;
	`;

export default SearchPage;