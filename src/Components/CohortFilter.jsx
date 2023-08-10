import { useState } from "react";

export default function CohortFilter({cohorts, onSelect, onShowAll}) {
    const [selectedCohort, setSelectedCohort] = useState(null);
    const cohortRe = /(.*?)([0-9]+)/;

    const handleCohortClick = (cohort) => {
        setSelectedCohort(cohort);
        onSelect(cohort);
    }

    const sortedCohorts = [...cohorts].sort();

    return (
        <div className="filter">
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <li onClick={() => {onShowAll(); setSelectedCohort(null); }}>All Students</li>

                {sortedCohorts.map(cohort => (
                    <li key={cohort} onClick={() => handleCohortClick(cohort)} > {cohort.replace(cohortRe, "$1 $2")} </li>
                ))}
            </ul>
        </div>
    )
}