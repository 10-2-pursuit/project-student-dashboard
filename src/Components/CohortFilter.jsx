
export default function CohortFilter({cohorts, onSelect, onShowAll, setSelectedCohort, selectedCohort}) {

    const handleCohortClick = (cohort) => {
        setSelectedCohort(cohort);
        onSelect(cohort);
    }

    return (
        <div className="filter">
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <li onClick={() => {onShowAll(); setSelectedCohort(null); }}>All Students <hr /></li>

                {cohorts.map(cohort => (
                    <li key={cohort} onClick={() => handleCohortClick(cohort)} className={selectedCohort} > {cohort.replace(/(.*?)([0-9]+)/, "$1 $2")} <hr /> </li>
                ))}
            </ul>
        </div>
    )
}