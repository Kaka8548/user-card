import { Followers, InfoList, Tweets } from './UserInfo.styled';

export default function UserInfo() {
  return (
    <InfoList>
      <Tweets>777 tweets</Tweets>
      <Followers>100500 followers</Followers>
    </InfoList>
  );
}
