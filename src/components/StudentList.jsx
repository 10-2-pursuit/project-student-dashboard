import data from '../data/data.json';
import Student from './Student';
export default function StudentList(){
    return (
        <ul>
            {data.map((student, index)=>{
                return (
                    <li key={ index }>
                        <Student student={ student } />
                    </li>
                )
            })}
        </ul>
    )
}