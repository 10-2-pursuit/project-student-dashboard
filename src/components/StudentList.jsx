import StudentListItem from "./StudentListItem";

export default function StudentList({ tempCohort, listTitle }) {
  return (
    <div className="studentList">
      <h2>{listTitle}</h2>
      <div className="studentTotal">Total Students: {tempCohort.length}</div>

      {tempCohort.map((student) => {
        return <StudentListItem key={student.id} student={student} />;
      })}
    </div>
  );
}
