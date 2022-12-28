import styled from 'styled-components';

export const AvatarFrame = styled.div`
  position: absolute;
  top: -50px;
  right: 50%;
  transform: translate(50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 92px;
  height: 92px;
  background: #ebd8ff;
  box-shadow: 0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06),
    inset 0px -2.55556px 5.11111px #ae7be3,
    inset 0px 5.11111px 3.83333px #fbf8ff;
  border-radius: 50%;
`;

export const InnerFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #5736a3;
  box-shadow: 0px -2.55556px 5.11111px #ae7be3;
`;

export const Image = styled.img`
display: block;
width: 100%
height: auto;
z-index: 1;
border-radius: 50%;
`;
