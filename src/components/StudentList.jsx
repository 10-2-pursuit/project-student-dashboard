import Student from './Student';
export default function StudentList({ studentList }){
    return (
        <ul>
            {studentList.map((student, index)=>{
                return (
                    <li key={ index }>{index}
                        <Student student={ student } />
                    </li>
                )
            })}
        </ul>
    )
}