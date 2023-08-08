export default function StudentList({ students }) {
    const total = students.length;
  return (
    <div className="student-list">
      <h2>Students</h2>
      <p>Total Students: {total} </p>
      <ul>
        {students.map((student) => (
          <li>
            <img src={student.profilePhoto} alt={student.names.surname} />
            <h3>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h3>
            <p>{student.username}</p>
            <p>{student.dob}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
