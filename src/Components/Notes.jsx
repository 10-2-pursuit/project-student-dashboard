import React, { useEffect } from 'react';
import { useState } from 'react';


const Notes = ({handleFormSubmit, studentId, studentNotes}) => {
    // console.log(studentNotes)
    // console.log(studentId)
    
    const [ newComment, setNewComment] = useState({
        commenterName: "",
        comment: ""
    })
    const [commentAmount, setCommentAmount] = useState(studentNotes[studentId] ? studentNotes[studentId].length : 0)

    
    const handleChange = (e) => {
        setNewComment({...newComment, 
        [e.target.id]: e.target.value
        })
    }

    const updateComments = (e) => {
        handleFormSubmit(e)
        console.log(commentAmount)
        setCommentAmount(commentAmount+1)
        console.log(commentAmount)
        
    }

    return (
        <div className="Notes">
            <h3> 1-on-1 Notes</h3>
            <h4>Number of Comments: {commentAmount}</h4>
            <form onSubmit={updateComments}>
              <fieldset>
                    <input
                        value={studentId} 
                        type="hidden" name="studentId" id="studentId" />
                    <label htmlFor="commenterName"> {`Commenter Name `}</label>
                        <input 
                            value={newComment.commenterName} 
                            onChange={handleChange}
                            type="text" name="commenterName" id="commenterName" required/><br />
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
