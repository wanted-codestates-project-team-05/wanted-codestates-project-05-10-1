import React from 'react';
import styled from 'styled-components';

export const Title = (props) => {

	const { coments } = props;

	return (
		<Container>
			<Coments>
				{coments}
			</Coments>
		</Container>
	)
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: 0.3s display ease;
  @media (max-width: 768px) {
    animation: fade-out 3s;
    animation-fill-mode: forwards;
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

const Coments = styled.div`
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
    font-weight: 700;
  }
  @media (max-width: 390px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;