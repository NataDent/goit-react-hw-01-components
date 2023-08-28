import PropTypes from 'prop-types';

export const ListItem = ({ label, percentage }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};
ListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
