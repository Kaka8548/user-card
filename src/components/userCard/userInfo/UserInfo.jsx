import { Followers, InfoList, Tweets } from './UserInfo.styled';
import PropTypes from 'prop-types';

export default function UserInfo({ followers, tweets }) {
  return (
    <InfoList>
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followers} followers</Followers>
    </InfoList>
  );
}

UserInfo.propTypes = {
  followers: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
};
