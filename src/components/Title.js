import React from 'react';
import styled from 'styled-components';

export const Title = () => {

	return (
		<Container>
			<Coments>
				국내 모든 임상시험 검색하고
				<br/> 
				온라인으로 참여하기
			</Coments>
		</Container>
	)
}

const Container = styled.div`
	width: 41.25rem;
	height: 6.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`

const Coments = styled.div`
	font-size: 2.125rem;
	font-weight: 700;
	letter-spacing: -0.018em;
	line-height: 1.6;
`