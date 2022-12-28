import styled from 'styled-components';
import backgroundImage from '../../images/picture.png';
import backgroundImageDouble from '../../images/picture-2x.png';

export const Card = styled.article`
  position: relative;
  max-width: 454px;
  max-height: 547px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #ebd8ff;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const CardTop = styled.div`
  position: relative;
  padding: 24px;
  min-height: calc(251px - 48px);
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 34px;
  left: 52px;
  width: 357px;
  height: 194px;
  background-size: cover;
  background-image: url(${backgroundImage});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (-o-min-device-pixel-ratio: 2/1),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundImageDouble});
  }
`;

export const Line = styled.div`
  width: 454px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
`;

export const CardBottom = styled.div`
  position: relative;
  height: 214px;
  padding-top: 74px;
  text-align: center;
`;
