import { StatList } from './StatList';

export const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <StatList stats={data} />
    </section>
  );
};
