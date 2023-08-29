import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendName } from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus>{isOnline}</FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
