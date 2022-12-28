import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  text-transform: inherit;
  font-weight: 600;
  font-size: 20px;
  color: #373737;
  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5cd3a8' : '#ebd8ff'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 12px;
  padding: 16px 66px;
`;
