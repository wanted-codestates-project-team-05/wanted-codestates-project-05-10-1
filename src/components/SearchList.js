import React from 'react';
import styled from 'styled-components';
import { SearchItem } from './SearchItem';

export const SearchList = (props) => {

	const { loading, dataList, isFocus } = props;

	return(
		<>
			{
				isFocus ? 
				<Container>
					<Compleate>추천 검색어</Compleate>
					{dataList && 
						dataList.filter((x,index) => index < 7).map((item, index) => (
							<SearchItem key={index} item={item.name}/>
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
	overflow-y: scroll;
	border-radius: 26px;
	background-color: #fff;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 10px;
	box-sizing: border-box;
	margin: 10px auto;
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