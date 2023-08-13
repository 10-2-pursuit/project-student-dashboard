export default function CohortList({ cohorts, filteredCohorts }) {
  return (
    <div className="cohortList">
      <ul>
        <h2>Choose a Class by Start Date</h2>
        {cohorts.map((cohort) => {
          return (
            <li className="cohort" key={cohort}>
              <h4 onClick={() => filteredCohorts([cohort])}>{cohort}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
