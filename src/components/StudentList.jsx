import Student from './Student';

/**
 * StudentList()
 * ----------------------------
 * A react component to render a student list.
 * 
 * @param {React.props} param0 
 * @returns 
 */
export default function StudentList({ studentList, darkmode, comments, setComments }){
    return (
        <ul>
            {studentList.map((student, index)=>{
                return (
                    <li key={ student.id }>
                        <Student student={ student } comments={ comments } setComments={ setComments } darkmode={ darkmode }/>
                    </li>
                )
            })}
        </ul>
    )
}