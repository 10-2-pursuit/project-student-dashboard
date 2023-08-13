import Student from './Student';

/**
 * StudentList()
 * ----------------------------
 * A react component to render a student list.
 * 
 * @param {React.props} param0 
 *      @property {Object} student - a nested object for single student
 *      @property {Object[]} comments - a state hook for comments
 *      @property {} setComments - a setter for comments
 *      @property {boolean} darkmode - a state hook for dark mode
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