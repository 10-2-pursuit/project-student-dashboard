import StudentListItem from "./StudentListItem";

export default function StudentList({ students }) {
  return (
    <div className="studentList">
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentListItem student={student} />
      ))}
    </div>
  );
}
