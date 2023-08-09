import { useState } from "react";

export default function CohortFilter({cohorts, onSelect, onShowAll}) {
    const [selectedCohort, setSelectedCohort] = useState(null);

    const re = /[^0-9](?=[0-9])/g;

    const handleCohortClick = (cohort) => {
        setSelectedCohort(cohort);
        onSelect(cohort);
    }

    return (
        <div className="filter">
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <li onClick={() => {onShowAll(); setSelectedCohort(null); }}>All Students</li>

                {cohorts.map(cohort => (
                    <li key={cohort} onClick={() => handleCohortClick(cohort)} > {cohort.replace(re, '$& ')} </li>
                ))}
            </ul>
        </div>
    )
}