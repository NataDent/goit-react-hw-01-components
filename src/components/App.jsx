import user from '../data/user.json';
import data from '../data/data.json';
// import transactions from '../data/transactions.json'

import { Profile } from './Profile';
import { Statistics } from './Statistics';

export const App = ({ username, tag, location, avatar, statusbar }) => {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
