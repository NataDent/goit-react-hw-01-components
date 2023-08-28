import PropTypes from 'prop-types';
import data from '../data/data.json';
import { ListItem } from './ListItem';

export const StatList = data => {
  data.map(({ id }) => {
    return (
      <ul key={id} className="stat-list">
        <ListItem stats={data} />
      </ul>
    );
  });
};

StatList.propTypes = {
  id: PropTypes.string,
};
