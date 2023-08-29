import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
// import transactions from '../data/transactions.json'

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendsList } from './FriendsList';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => {
  return (
    <div>
      <Profile
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
