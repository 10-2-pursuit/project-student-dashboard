export default function StudentList({ students }) {
    const total = students.length;

    const formatDate = (inputDate) => {
        const partDate = inputDate.split('/');
        const month = parseInt(partDate[0], 10);
        const day = parseInt(partDate[1], 10);
        const year = parseInt(partDate[2], 10);

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ];

        const monthName = months[month - 1];

        const formattedDate = `${monthName} ${day}, ${year}`

        return formattedDate;
    }

  return (
    <div className="student-list">
      <h2>Students</h2>
      <p>Total Students: {total} </p>
      <ul>
        {students.map((student) => (
          <li>
            <img src={student.profilePhoto} alt={student.names.surname} />
            <h3>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h3>
            <p>{student.username} <br /> Birthday: {formatDate(student.dob)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
