import React from "react";

const CohortList = ({data}) => {
    cohorts = data.cohort.cohortCode
    // sortedCohorts = cohorts.sort()
    console.log(sortedCohorts)
    // const filteredCohort = cohortGroups.filter((cohortGroup) =>  )

    return (
        <div>
            {/* <h2 className="message">Choose a Class by Start Date</h2> */}
                <li>{cohortGroups}</li>
        </div>
      )
    }

  export default CohortList