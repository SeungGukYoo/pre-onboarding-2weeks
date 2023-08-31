import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function Error() {
  const navigate = useNavigate();

  return (
    <div>
      <TextContainer>잘못된 경로로 접근하였습니다. 홈으로 다시 이동해주십시오</TextContainer>
      <Button onClick={() => navigate('/')}>HOME</Button>
    </div>
  );
}

export default Error;
const TextContainer = styled.h3`
  margin: 20px;
`;
const Button = styled.button`
  outline: none;
  border: 1px solid #eee;
  background-color: transparent;
  cursor: pointer;
  padding: 12px 28px;
  border-radius: 11px;
  transition: 0.1s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
