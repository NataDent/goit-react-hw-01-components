import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

export const StatList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map(item => {
        return (
          <li key={item.id} className="item">
            <ListItem stat={item} />
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  id: PropTypes.string,
};
