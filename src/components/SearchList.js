import React from 'react';
import styled from 'styled-components';
import { SearchItem } from './SearchItem';
import { useSelector } from 'react-redux';

export const SearchList = (props) => {

	const { searching, dataList, isFocus, selected, inputLength } = props;

	return(
		<>
			{/* {
				isFocus ? 
				<Container>
					<Compleate>{inputLength ? "추천 검색어" : "검색어 없음"}</Compleate>
					{apiData && 
						apiData.filter((x,index) => index < 7).map((item, index) => (
							<div key={index} className={selected === item.id ? 'selected' : ''}>
								<SearchItem item={item.name}/>
							</div>
						))
					}
				</Container> 
				: ""
			} */}
		</>
	)
};

const Container = styled.div`
	width: 41.25rem;
	min-height: 50px;
	max-height: 30rem;
	height: auto;
	overflow-y: scroll;
	border-radius: 26px;
	background-color: #fff;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 10px;
	box-sizing: border-box;
	margin: 10px auto;

	.selected {
		font-weight: bold;
		font-size: 1.5rem;
		
		svg {
			font-size: 1.6rem;
		}
	}
`

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