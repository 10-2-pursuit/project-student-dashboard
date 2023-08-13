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
  setCreateNotes
}) {
  return (
    <div className="studentList">
      <h2>Student List</h2>
      <div className="studentTotal">Total Students: {students.length}</div>
      {students.map((student) => (
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
