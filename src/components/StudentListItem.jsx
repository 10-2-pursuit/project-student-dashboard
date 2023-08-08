export default function StudentListItem({ student }) {
  const studentName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`;

  return (
    <div className="student">
      <img src={student.profilePhoto} />
      <h3>{studentName}</h3>
      <span>{student.username}</span>
      <br></br>
      <span>Birthday: {student.dob}</span>
      <br></br>
      <span onClick={() => {}}>Show More...</span>
    </div>
  );
}
