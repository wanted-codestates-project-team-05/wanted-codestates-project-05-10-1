import React from 'react';
import styled from 'styled-components';
import { SearchItem } from './SearchItem';

export const SearchList = (props) => {

	const { loading } = props;

	return(
		<Container>
			<Compleate>추천 검색어</Compleate>
			<SearchItem item={props.item}/>
		</Container>
	)
}

const Container = styled.div`
	width: 41.25rem;
	min-height: 50px;
	height: auto;
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