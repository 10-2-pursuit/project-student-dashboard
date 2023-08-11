import React from 'react';
import { useState } from 'react';

const Notes = ({handleFormSubmit, studentId, studentNotes}) => {
    // console.log(studentNotes)
    // console.log(studentId)
    
    const [ newComment, setNewComment] = useState({
        commenterName: "",
        comment: ""
    })

    // console.log(studentNotes[studentId])
    
    const handleChange = (e) => {
        setNewComment({...newComment, 
        [e.target.id]: e.target.value
        })
    }

    console.log(studentNotes[studentId])

    return (
        <div className="Notes">
            <h3> 1-on-1 Notes</h3>
            <form onSubmit={handleFormSubmit}>
              <fieldset>
                    <input
                        value={studentId} 
                        type="hidden" name="studentId" id="studentId" />
                    <label htmlFor="commenterName"> {`Commenter Name `}</label>
                        <input 
                            value={newComment.commenterName} 
                            onChange={handleChange}
                            type="text" name="commenterName" id="commenterName" /><br />
                    <label htmlFor="comment"> Commenter </label>
                        <input 
                            value={newComment.comment} 
                            onChange={handleChange} 
                            type="text" name="comment" id="comment" required/><br />
                    <input type="submit" value="Add Note" />
              </fieldset>
            </form>
            <ul>
                {studentNotes[studentId] ? studentNotes[studentId].map((comment) => (
                    <li>
                        {`${comment[0]} says, "${comment[1]}"`}
                    </li>
                )
                ):null}
            </ul>
        </div>
    );
}

export default Notes;
