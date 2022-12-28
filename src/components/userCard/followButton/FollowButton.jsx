import { Button } from './FollowButton.styled';
import PropTypes from 'prop-types';

export default function FollowButton({ isFollowing, handleClick, userId }) {
  return (
    <Button
      type="button"
      isFollowing={isFollowing}
      onClick={() => handleClick(userId)}
    >
      {isFollowing ? 'following' : 'follow'}
    </Button>
  );
}

FollowButton.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
