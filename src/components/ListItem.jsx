import PropTypes from 'prop-types';

export const ListItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};
ListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
