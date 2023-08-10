import StudentListItem from "./StudentListItem";

export default function StudentList({ students, toggleShowMore, showMore, setShowMore }) {
  return (
    <div className="studentList">
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentListItem student={student} toggleShowMore={toggleShowMore} showMore={showMore} setShowMore={setShowMore}/>
      ))}
    </div>
  );
}
