import StudentListItem from "./StudentListItem";

export default function StudentList({
  students,
  toggleShowMore,
  showMore,
  setShowMore,
  showNotes,
  setShowNotes,
  toggleShowNotes,
  createNotes,
  setCreateNotes,
  tempCohort
}) {
  return (
    <div className="studentList">
      <h2>Student List</h2>
      <div className="studentTotal">Total Students: {tempCohort.length}</div>
      {tempCohort.map((student) => (
        <StudentListItem
          student={student}
          toggleShowMore={toggleShowMore}
          showMore={showMore}
          setShowMore={setShowMore}
          showNotes={showNotes}
          setShowNotes={setShowNotes}
          createNotes={createNotes}
        setCreateNotes={setCreateNotes}
        />
      ))}
    </div>
  );
}
