import UserCard from './userCard/UserCard';
import FormatNumber from 'utils/FormatNumber';
import { useState, useEffect } from 'react';
import { UsersList } from 'App.styled';
import users from '../users/users.json';

export const App = () => {
  const storageUsers = localStorage.getItem('storage-users');
  const [userList, setUserList] = useState(JSON.parse(storageUsers) ?? users);

  const toggleFollowers = id => {
    const updatedUsers = userList.map(user => {
      if (id === user.id) {
        return {
          ...user,
          isFollowing: !user.isFollowing,
          followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
        };
      }
      return user;
    });
    setUserList(updatedUsers);
  };

  useEffect(() => {
    if (userList !== users) {
      localStorage.setItem('storage-users', JSON.stringify(userList));
    }
  }, [userList]);

  return (
    <>
      <UsersList>
        {userList.map(user => (
          <UserCard
            key={user.id}
            tweets={user.tweets}
            followers={FormatNumber(user.followers)}
            avatar={user.avatar}
            handleClick={toggleFollowers}
            isFollowing={user.isFollowing}
            userId={user.id}
          />
        ))}
      </UsersList>
    </>
  );
};
