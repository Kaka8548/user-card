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

export default function UserCard({ followers }) {
  return (
    <Card>
      <CardTop>
        <Logo />
        <BackgroundWrapper />
      </CardTop>

      <Line />

      <CardBottom>
        <Avatar />
        <UserInfo />
        <FollowButton />
      </CardBottom>
    </Card>
  );
}
