import React from 'react';
import styled from 'styled-components';
import { SearchItem } from './SearchItem';
import { useSelector } from 'react-redux';

export const SearchList = (props) => {

	const { isSearching, isFocus, selected, inputLength } = props;

	const reduxDataList = useSelector(state => isSearching ? '' : state.dataList.value);

	return(
		<>
			{
				isFocus ? 
				<Container>
					<Compleate>{isSearching ? "검색중..." : inputLength ? "추천 검색어" : "검색어 없음"}</Compleate>
					{reduxDataList && inputLength !== 0 &&
						reduxDataList.filter((x,index) => index < 7).map((item, index) => (
							<div key={index} className={selected === item.id ? 'selected' : ''}>
								<SearchItem item={item.name}/>
							</div>
						))
					}
				</Container> 
				: ""
			}
		</>
	)
};

const Container = styled.div`
  width: 41.25rem;
  min-height: 50px;
  max-height: 30rem;
  height: auto;
  overflow: auto;
  border-radius: 26px;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  box-sizing: border-box;
  margin: 10px auto;

  @media (max-width: 768px) {
    position: fixed;
    top: 64px;
    margin: 0;
    left: 0;
    width: 100%;
		border-radius: 0;
    z-index: 10;
  }

  .selected {
    font-weight: bold;
    font-size: 1.5rem;

    svg {
      font-size: 1.6rem;
    }
  }
`;

const Compleate = styled.div`
	width: 100%;
	height: 50px;
	text-align: start;
	padding-top: 20px;
	padding-left: 10px;
	font-size: 0.825rem;
	color: gray;
	box-sizing: border-box;
`