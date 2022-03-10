import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchItem = (props) => {

	const { item } = props;

	return (
		<Container>
			<BiSearch/>
			{item}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 2.5rem;
	background-color: transparent;
	display: flex;
	align-items: center;
	
	svg {
		margin-right: 10px;
		font-size: 1.2rem;
	}
`

