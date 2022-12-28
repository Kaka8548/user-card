import { AvatarFrame, Image, InnerFrame } from './Avatar.styled';
import PropTypes from 'prop-types';

export default function Avatar({ avatar }) {
  return (
    <>
      <AvatarFrame>
        <InnerFrame />
        <Image src={avatar} alt="user-avatar" width="72" />
      </AvatarFrame>
    </>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};
