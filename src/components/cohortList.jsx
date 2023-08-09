export default function CohortList({ cohorts, setCohorts, students }) {
  return (
    <div className="cohortList">
    <ul>
      <h2>Choose a Class by Start Date</h2>
      {cohorts.map((cohort) => {
        return (
          <li className="cohort">
            <h4>{cohort}</h4>
          </li>
        );
      })}
    </ul>
    </div>
  );
}
