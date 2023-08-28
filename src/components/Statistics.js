import PropTypes from 'prop-types';

const ListItem = ({ data }) => {
  const { id, label, percentage } = data;
  data.map(() => {
    return (
      <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    );
  });
};

export const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <ListItem />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
