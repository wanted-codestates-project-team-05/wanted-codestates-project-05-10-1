import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGetSearchWordQuery } from '../services/searchWord';
import { useDispatch } from 'react-redux';
import { dataListUpdate } from '../services/dataListSlice';

import { SearchInput } from '../components/SearchInput';
import { SearchList } from '../components/SearchList';
import { Title } from '../components/Title';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function SearchPage() {

	const [inputValue, setInputValue] = useState('');
	const debounceInputValue = useDebounce(inputValue, 1000);
	const [dataList, setDataList] = useState();
	const [isFocus, setIsFocus] = useState(false);
	const [selected, setSelected] = useState();
	const [listIndex, setListIndex] = useState(-1);
  const dispatch = useDispatch();
  const { data } = useGetSearchWordQuery(debounceInputValue);

	const handleKeyPress = (e) => {
		if(e.keyCode === 40 && listIndex < 6){
      setListIndex(listIndex + 1);
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

	useEffect(() => {
		setDataList(data)
    dispatch(dataListUpdate(data))
	}, [data])

	const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }
  
	const handleSearch = () => {
    setInputValue('')
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
				dataList={dataList} 
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