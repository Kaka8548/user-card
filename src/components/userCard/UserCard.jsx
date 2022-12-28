import {
  BackgroundWrapper,
  Card,
  CardBottom,
  CardTop,
  Line,
} from './UserCard.styled';
import Logo from './logo/Logo';
import Avatar from './avatar/Avatar';
import FollowButton from './followButton/FollowButton';
import UserInfo from './userInfo/UserInfo';
import PropTypes from 'prop-types';

export default function UserCard({
  followers,
  tweets,
  handleClick,
  isFollowing,
  userId,
  avatar,
}) {
  return (
    <Card>
      <CardTop>
        <Logo />
        <BackgroundWrapper />
      </CardTop>

      <Line />

      <CardBottom>
        <Avatar avatar={avatar} />
        <UserInfo followers={followers} tweets={tweets} />
        <FollowButton
          handleClick={handleClick}
          isFollowing={isFollowing}
          userId={userId}
        />
      </CardBottom>
    </Card>
  );
}

UserCard.propTypes = {
  followers: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
